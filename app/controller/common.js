'use strict';

const Controller = require('egg').Controller;
const menus = require('../../Menus.js');

class CommonController extends Controller {
  async getUnionIdByCode() {
    const { ctx } = this;
    const params = ctx.query;
    params.appletName = ctx.header.appletname;
    const res = await ctx.service.common.getUnionIdByCode(params);
    ctx.body = res;
  }

  async getMenusSider() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: 'get menus ok!',
      data: menus,
    };
  }

  async getAccessToken() {
    const { ctx } = this;
    const res = await ctx.service.common.getAccessToken();
    ctx.body = res;
  }

  async getAppletAccessToken() {
    const { ctx } = this;
    const res = await ctx.service.common.getAppletAccessToken();
    ctx.body = res;
  }
}
module.exports = CommonController;
