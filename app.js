'use strict';
class AppBootHook {
  constructor(app) {
    this.app = app;
  }
  configWillLoad() {
    console.log('即将加载配置文件');
  }
  async configDidLoad() {
    console.log('配置文件加载完成');
  }
  async didLoad() {
    console.log('文件加载完成');
  }
  async willReady() {
    console.log('插件启动完毕');
  }
  async didReady() {
    console.log('work准备就绪');
  }
  async serverDidReady() {
    console.log('应用启动完成');
  }
  async beforeClose() {
    console.log('应用即将关闭');
  }
}
module.exports = AppBootHook;
