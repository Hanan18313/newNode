'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.post('/userInfo', controller.jnShow.createUserInfo);
  // router.put('/');

};
