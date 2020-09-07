'use strict';
const FileTransport = require('egg-logger').FileBufferTransport;
const moment = require('moment');
const Logger = require('egg-logger').Logger;

class CoustomTransport extends FileTransport {
  constructor(options, ctx) {
    super(options);
    this.ctx = ctx;
  }
  log(level, args, meta) {
    const prefixStr = this.buildFormat();
    for (const i in args) {
      if (args.hasOwnProperty(i)) {
        if (parseInt(i, 10) === 0) {
          args[i] = `${prefixStr}${args[i]}`;
        }
        if (parseInt(i, 10) === args.length - 1) {
          args[i] += '\n';
        }
      }
    }
    super.log(level, args, meta);
  }

  buildFormat() {
    const timeStr = `[${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}]`;
    const threadNameStr = `[${process.pid}]`;
    const urlStr = `[${this.ctx.request.url}]`;
    return `${timeStr}${threadNameStr}${urlStr}`;
  }
  getUserId(userId) {
    this.userId = userId;
  }
}


function customLogger(ctx) {
  const logger = new Logger();
  logger.set('file', new CoustomTransport({
    level: 'INFO',
    file: 'app.log',
  }, ctx));
  return logger;
}

module.exports = () => {
  return async function getLog(ctx, next) {
    customLogger(ctx);
    next();
  };
};

