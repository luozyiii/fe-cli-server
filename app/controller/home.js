'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, this is fe-cli 模版服务';
  }
}

module.exports = HomeController;
