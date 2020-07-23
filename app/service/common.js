'use strict';

const Service = require('egg').Service;
const WXCONFIG = require('../../config/config.wx.js');

class CommonService extends Service {
  async getUnionIdByCode(params) {
    const { appletName, code, encryptedData, iv } = params;
    const { AppID, Secret } = WXCONFIG[appletName];
    const { ctx } = this;
    const result = await ctx.curl('https://api.weixin.qq.com/sns/jscode2session?appid=' + AppID + '&secret=' + Secret + '&js_code=' + code + '&grant_type=authorization_code', {
      dataType: 'json',
    });
    const res = await this.ctx.service.base.WxCryptoInfo(AppID, result.data.session_key).decryptData(encryptedData, iv);
    return ({
      code: 200,
      msg: 'get unionid ok',
      data: res,
    });
  }
}

module.exports = CommonService;
