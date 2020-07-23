'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
  async getUnionIdByCode() {
    const { ctx } = this;
    const params = ctx.query;
    const res = await ctx.service.common.getUnionIdByCode(params);
    console.log(res);
    ctx.body = res;
  }
}
module.exports = CommonController;
