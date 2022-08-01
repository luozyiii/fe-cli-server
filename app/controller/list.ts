import { Controller } from 'egg';
import ProjectModel from '../model/project';

export default class AddController extends Controller {
  public async index() {
    const { ctx } = this;
    // 查询全部
    const list = await ProjectModel.find({});
    ctx.body = list;
  }
}
