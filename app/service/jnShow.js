'use strict';

const Service = require('egg').Service;
const WX_CONFIG = require('../../config/config.wx');

class JnShowService extends Service {

  // 用户信息
  async createUserInfo(params) {
    const { unionId, avatarUrl, openId } = params;
    let memberInfo;
    try {
      memberInfo = await this.ctx.curl(WX_CONFIG.WxConfig.proxy_domain + '/api/getMemberInfo/' + unionId, {
        dataType: 'json',
      });
    } catch (error) {
      this.logger.error(error);
    }
    const findUser = await this.ctx.model.User.findOne({ where: { unionid: unionId } });
    const data = memberInfo.data.data;
    if (memberInfo.data.code === 200) { // 是会员
      if (!findUser) { // 不存在
        const createUser = await this.ctx.model.User.create({
          user_name: data.name,
          unionid: unionId,
          openid: openId,
          avatar: avatarUrl,
          address: data.addr,
          company: data.company,
          phone: data.phone,
          is_check: 1,
        });
        return ({
          code: 200,
          msg: '创建成功',
          data: createUser,
        });
      }
      const updateUser = await this.ctx.model.User.update({
        company: data.company,
        phone: data.phone,
      }, {
        where: {
          unionid: unionId,
        },
      });
      return ({
        code: 200,
        msg: '会员已存在',
        data: updateUser,
      });
    }
    if (!findUser) {
      const createUser = await this.ctx.model.User.create({
        unionid: unionId,
        openid: openId,
        avatar: avatarUrl,
      });
      return ({
        code: 200,
        msg: '创建成功',
        data: createUser,
      });
    }
    return ({
      code: 200,
      msg: '已存在',
    });
  }

  // 报名
  async signUp(params) {
    const { unionId } = params;
    const memberInfo = await this.ctx.service.common.getMemberInfo({ unionId });
    const existUserInfo = await this.ctx.model.User.findOne({ where: { unionid: unionId } });
    if (memberInfo.data.code === 200) {
      if (memberInfo.data.data.checked === 1) {
        if (existUserInfo.dataValues.is_check === 1) {
          const updateSignUpInfo = await this.ctx.model.User.update({ status: 1, sign_up_time: new Date() }, {
            where: { unionid: unionId },
          });
          return ({
            code: 200,
            msg: '报名成功',
            data: updateSignUpInfo,
          });
        }
        const updateSignUpInfo = await this.ctx.model.User.update({
          status: 1,
          is_check: 1,
          user_name: memberInfo.data.data.name,
          company: memberInfo.data.data.company,
          phone: memberInfo.data.data.phone,
          address: memberInfo.data.data.addr,
          sign_up_time: new Date(),
        }, { where: { unionid: unionId } });
        return ({
          code: 200,
          msg: '（新）报名成功',
          data: updateSignUpInfo,
        });
      }
      return ({
        code: -20002,
        msg: '未通过或进行会员认证',
        data: [],
      });
    }
    return (memberInfo.data);
  }

  // 午宴
  async attendLunch(params) {
    const { unionId, val } = params;
    await this.ctx.model.User.update({ is_eat: val }, { where: { unionid: unionId } });
    return ({
      code: 200,
      msg: '是否午宴',
      data: [],
    });
  }
  async changeActiveStatus() {
    const activeStatus = await this.ctx.model.ActiveInfo.findOne({ where: { id: 1 } });
    if (activeStatus.dataValues.active_status === '未开始') {
      await this.ctx.model.ActiveInfo.update({ active_status: '进行中' }, { where: { id: 1 } });
      await this.ctx.model.User.update({ status: '待签到' }, { where: { status: '待开幕' } });
      return ({
        code: 200,
        msg: '展会进行中',
      });
    } else if (activeStatus.dataValues.active_status === '进行中') {
      await this.ctx.model.ActiveInfo.update({ active_status: '已结束' }, { where: { id: 1 } });
      await this.ctx.model.User.update({ status: '已结束' });
      return ({
        code: 200,
        msg: '展会已结束',
      });
    }
  }

  /**
   * 奖品
   */

}

module.exports = JnShowService;
