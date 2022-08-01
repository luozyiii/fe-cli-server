const mgUtilt = require('../utils/mongo');
const { mongoose, Schema } = mgUtilt;

const projectSchema = new Schema({
  type: String,
  name: String,
  url: String,
});

const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = ProjectModel;
