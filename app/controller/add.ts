import { Controller } from 'egg';
import ProjectModel from '../model/project';

export default class AddController extends Controller {
  public async index() {
    const { ctx } = this;
    // 实例化
    const project = new ProjectModel({ name: '项目3', link: 'www.baidu.com' });
    // 持久化保存
    project.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('保存成功');
      }
    });
    ctx.body = await ctx.service.test.sayHi('add');
  }
}
