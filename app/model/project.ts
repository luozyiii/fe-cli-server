import { mongoose, Schema } from '../utils/mongo';

const projectSchema = new Schema({
  name: String,
  link: String,
});

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
