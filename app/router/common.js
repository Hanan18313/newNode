'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/unionIdByCode', controller.common.getUnionIdByCode);
};
