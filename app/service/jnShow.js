'use strict';

const Service = require('egg').Service;
const WX_CONFIG = require('../../config/config.wx');

class JnShowService extends Service {
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
    const findUser = await this.ctx.model.User.findOne({
      where: {
        unionid: unionId,
      },
    });

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
          sign_up_time: new Date(),
          is_check: data.is_check,
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
        sign_up_time: new Date(),
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

  async getMemberInfo(params) {
    const { unionId } = params;
    const memberInfo = await this.ctx.model.User.findOne({
      where: {
        unionid: unionId,
      },
    });
    console.log(memberInfo);
  }
}

module.exports = JnShowService;
