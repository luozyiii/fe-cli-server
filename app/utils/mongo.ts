import mongoose from 'mongoose';

import { mongodbUrl, mongodName } from '../../config/db';

const Schema = mongoose.Schema;
mongoose.connect(`${mongodbUrl}/${mongodName}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, '数据库连接失败...'));
db.once('open', function() {
  console.log('数据库连接成功...');
});

export {
  mongoose,
  Schema,
};

