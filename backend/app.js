// import "dotenv/config";

// import * as projects from "./model.mjs";
import projects from "../frontend/src/data/projects.js";
const express = require("express");
const app = express();
const PORT = 8000;

const apiRoutes = require("./routes");
//app.use(express.json()); // REST needs JSON MIME type.
//app.use("/api", apiRoutes);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/project", (req, res) => {
  res.send(projects);
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
