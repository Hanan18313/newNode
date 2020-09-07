'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/unionIdByCode', controller.common.getUnionIdByCode);
  router.get('/menusSider', controller.common.getMenusSider);
  router.get('/accessToken', controller.common.getAccessToken);
  router.get('/appletAccessToken', controller.common.getAppletAccessToken);
};
