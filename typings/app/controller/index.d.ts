// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdd = require('../../../app/controller/add');
import ExportHome = require('../../../app/controller/home');
import ExportList = require('../../../app/controller/list');

declare module 'egg' {
  interface IController {
    add: ExportAdd;
    home: ExportHome;
    list: ExportList;
  }
}
