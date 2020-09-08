'use strict';
const Subscription = require('egg').Subscription;

class updateCache extends Subscription {
  static get schedule() {
    return {
      type: 'worker',
      // cron: '0 35 15 8 9 *',
      interval: 5,
      disabled: false,
      env: [ 'dev', 'debug' ],
    };
  }
}

module.exports = updateCache;
