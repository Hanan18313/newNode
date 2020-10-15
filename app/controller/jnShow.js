'use strict';

const Controller = require('egg').Controller;

class JnShowController extends Controller {

  async createUserInfo() {
    const { ctx } = this;
    const params = ctx.request.body;
    params.unionId = ctx.header.unionid;
    params.openId = ctx.header.openid;
    const res = await ctx.service.jnShow.createUserInfo(params);
    ctx.body = res;
  }

  async signUp() {
    const { ctx } = this;
    const params = {};
    params.unionId = ctx.header.unionid;
    const res = await ctx.service.jnShow.signUp(params);
    ctx.body = res;
  }

  async attendLunch() {
    const { ctx } = this;
    const params = ctx.request.body;
    params.unionId = ctx.header.unionid;
    const res = await ctx.service.jnShow.attendLunch(params);
    ctx.body = res;
  }

  async signIn() {
    
  }
}

module.exports = JnShowController;
