import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/add', controller.add.index);
  router.get('/list', controller.list.index);
};