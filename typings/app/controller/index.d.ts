// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdd from '../../../app/controller/add';
import ExportHome from '../../../app/controller/home';
import ExportList from '../../../app/controller/list';

declare module 'egg' {
  interface IController {
    add: ExportAdd;
    home: ExportHome;
    list: ExportList;
  }
}
