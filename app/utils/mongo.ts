import mongoose from 'mongoose';

import { mongodbUrl, mongodName } from '../../config/db';

const Schema = mongoose.Schema;
mongoose.connect(`${mongodbUrl}/${mongodName}`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('sucess');
});

export {
  mongoose,
  Schema,
};

