import { Controller } from 'egg';
import ProjectModel from '../model/project';

export default class AddController extends Controller {
  public async index() {
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
