/* eslint valid-jsdoc: "off" */

'use strict';

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
  config.keys = appInfo.name + '_1659360055086_3848';

  // add your middleware config here
  config.middleware = [];

  // 解决 csrf 安全策略，导致 API 无法访问
  config.security = {
    csrf: {
      enable: false,
      // ignoreJSON: true
    },
    domainWhiteList: [ '*' ],
  };

  // 结局跨域的我问题
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
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
