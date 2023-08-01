const account = 'admin';
const pwd = '******';
const mongodbUrl = `mongodb://${account}:${pwd}@81.71.98.176:27017`;
const mongodName = 'fe-cli';

module.exports = {
  mongodbUrl,
  mongodName,
};
