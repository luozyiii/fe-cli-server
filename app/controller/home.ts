import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('欢迎来到fe-cli脚手架!');
  }
}
