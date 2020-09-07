'use strict';
const crypto = require('crypto');


const Service = require('egg').Service;

class BaseService extends Service {
  WxCryptoInfo(appId, sessionKey) {
    function WXBizDataCrypt(appId, sessionKey) {
      this.appId = appId;
      this.sessionKey = sessionKey;
    }
    WXBizDataCrypt.prototype.decryptData = function(encryptedData, iv) {
      const SessionKey = new Buffer(this.sessionKey, 'base64');
      const EncryptedData = new Buffer(encryptedData, 'base64');
      const Iv = new Buffer(iv, 'base64');
      let decoded;
      try {
        const decipher = crypto.createDecipheriv('aes-128-cbc', SessionKey, Iv);
        decipher.setAutoPadding(true);
        decoded = decipher.update(EncryptedData, 'binary', 'utf8');
        decoded += decipher.final('utf-8');
        decoded = JSON.parse(decoded);
      } catch (error) {
        return new Error('Ellegal Buffer');
      }
      if (decoded.watermark.appid !== this.appId) {
        return new Error('Illegal Buffer');
      }
      return decoded;
    };
    return new WXBizDataCrypt(appId, sessionKey);
  }

}

module.exports = BaseService;
