import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  stack: String,
  description: String,
  image: String,
  link: String,
  code: String,
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
