const mongoose = require('mongoose');
const mg = require('../../config/db');
const { mongodbUrl, mongodName } = mg;

const Schema = mongoose.Schema;
mongoose.connect(`${mongodbUrl}/${mongodName}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, '数据库连接失败...'));
db.once('open', function() {
  console.log('数据库连接成功...');
});

module.exports = { mongoose, Schema };
