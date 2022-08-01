import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1659073930605_1689';

  // add your egg config in here
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

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
