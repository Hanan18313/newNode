'use strict';

module.exports = app => {
  const { router, controller } = app;

  // 展会前（未开始）
  router.post('/exhibition/userInfo', controller.jnShow.createUserInfo);
  router.put('/exhibition/signUp', controller.jnShow.signUp);
  router.put('/exhibition/lunch', controller.jnShow.attendLunch);

  // 进行中
  // 扫码签到 + 输入抽奖号
  router.put('/exhibition/signIn', controller.jnShow.signIn);

};
