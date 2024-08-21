const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "..projects.json");

const readData = () => {
  const projects = fs.readFileSync(datFilePath, "utf8");
  return JSON.parse(projects);
};

exports.getAllProjects = (req, res) => {
  const data = readData();
  res.json(projects.projects);
};
