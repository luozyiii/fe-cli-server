const Controller = require('egg').Controller;
const ProjectModel = require('../model/project');

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    // 查询全部
    const list = await ProjectModel.find({});
    if (list) {
      ctx.body = {
        code: 200,
        data: list,
        msg: '',
      };
    } else {
      ctx.body = {
        code: 403,
        msg: '查询失败',
      };
    }
  }
}

module.exports = ListController;
