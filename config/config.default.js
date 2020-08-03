/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1566981850906_1418';

  // add your middleware config here
  config.middleware = [];

  // 跨域
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://192.168.50.80:9003' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  console.log(path.join(appInfo.baseDir, 'app/public/dist'));
  // 静态文件
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: true,
    buffer: false,
    maxFiles: 1000,
  };

  // 自定义端口
  config.cluster = {
    listen: {
      port: 9003,
      hostname: '192.168.50.80',
    },
  };

  // mysql
  config.sequelize = {
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8',
    },
    host: 'www.langjie.com',
    username: 'root',
    password: '123456',
    port: '33060',
    database: 'lj_mp',
    timezone: '+08:00',
  };

  // onerror
  config.onerror = {
    all(err, ctx) {
      ctx.body = 'error';
      ctx.status = 500;
    },
    html(err, ctx) {
      ctx.body = '<h3>error</h3>';
      ctx.status = 500;
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
