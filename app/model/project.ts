import { mongoose, Schema } from '../utils/mongo';

const projectSchema = new Schema({
  name: String,
  url: String,
  tag: [ String ],
});

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
