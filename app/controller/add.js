'use strict';

const Controller = require('egg').Controller;
const ProjectModel = require('../model/project');

class AddController extends Controller {
  async index() {
    const { ctx } = this;
    const body = ctx.request.body;
    // 实例化
    const project = new ProjectModel(body);
    // 持久化保存
    const res = await project.save();
    if (res) {
      ctx.body = {
        code: 200,
        msg: '保存成功',
      };
    } else {
      ctx.body = {
        code: 201,
        msg: res,
      };
    }
  }
}
module.exports = AddController;
