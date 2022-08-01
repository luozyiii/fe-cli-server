const Controller = require('egg').Controller;
const ProjectModel = require('../model/project');

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    // 查询全部
    const list = await ProjectModel.find({});
    ctx.body = list;
  }
}

module.exports = ListController;
