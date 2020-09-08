'use strict';

const Service = require('egg').Service;
const WX_CONFIG = require('../../config/config.wx.js');

class CommonService extends Service {
  async getUnionIdByCode(params) {
    const { appletName, code, encryptedData, iv } = params;
    const { AppID, Secret } = WX_CONFIG.WxConfig[appletName];
    const { ctx } = this;
    let result;
    try {
      result = await ctx.curl('https://api.weixin.qq.com/sns/jscode2session?appid=' + AppID + '&secret=' + Secret + '&js_code=' + code + '&grant_type=authorization_code', {
        dataType: 'json',
      });
    } catch (error) {
      this.logger.error(error);
    }
    const res = await this.ctx.service.base.WxCryptoInfo(AppID, result.data.session_key).decryptData(encryptedData, iv);
    return ({
      code: 200,
      msg: 'get unionid ok',
      data: res,
    });
  }
  async getAccessToken() {
    const proxy_domain = WX_CONFIG.WxConfig.proxy_domain;
    let accessToken;
    try {
      accessToken = await this.ctx.curl(proxy_domain + '/wx/getToken', {
        dataType: 'json',
      });
      accessToken = typeof accessToken.data === 'object' ? accessToken.data : JSON.parse(accessToken.data);
    } catch (error) {
      this.logger.error(error);
    }
    return ({
      code: 200,
      msg: 'get AccessToken ok',
      data: accessToken,
    });
  }

  async getAppletAccessToken() {
    const APPID = WX_CONFIG.WxConfig.JN_signIn.AppID;
    const APPSECRET = WX_CONFIG.WxConfig.JN_signIn.Secret;
    const APPLET_ACCESS_TOKEN_URL = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + APPID + '&secret=' + APPSECRET;
    let appletAccessToken;
    try {
      appletAccessToken = await this.ctx.curl(APPLET_ACCESS_TOKEN_URL, {
        dataType: 'json',
      });
      appletAccessToken = typeof appletAccessToken.data === 'object' ? appletAccessToken.data : JSON.parse(appletAccessToken.data);
    } catch (error) {
      this.logger.error(error);
    }
    return ({
      code: 200,
      msg: 'get AccessToken ok',
      data: appletAccessToken,
    });
  }
}

module.exports = CommonService;
