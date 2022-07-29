import { Controller } from 'egg';
import ProjectModel from '../model/project';

export default class AddController extends Controller {
  public async index() {
    const { ctx } = this;
    // 查询全部
    const list = await ProjectModel.find({});
    console.log(list);
    ctx.body = list;
    // ctx.response.success({ data: list });
  }
}
