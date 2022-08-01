// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProject = require('../../../app/model/project');

declare module 'egg' {
  interface IModel {
    Project: ReturnType<typeof ExportProject>;
  }
}
