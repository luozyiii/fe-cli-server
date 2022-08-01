const mgUtilt = require('../utils/mongo');
const { mongoose, Schema } = mgUtilt;

const projectSchema = new Schema({
  name: String,
  url: String,
  tag: [ String ],
});

const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = ProjectModel;
