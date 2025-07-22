import Project from "../models/Product.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error on server" });
  }
};

export const createProject = async (req, res) => {
  const { title, description, stack, image, link, code } = req.body;
  const newProject = new Project({
    title,
    description,
    stack,
    image,
    link,
    code,
  });
  await newProject.save();
  res.json(newProject);
};

export const deleteProject = async (req, res) => {
  const deleted = await Project.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Project not found" });
  res.json({ message: "Project deleted" });
};

export const updateProject = async (req, res) => {
  const { title, description, stack, image, link, code } = req.body;
  if (!title || !description || !stack || !image || !link || !code) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      stack,
      image,
      link,
      code,
    },
    { new: true }
  );
  res.json(updated);
};
