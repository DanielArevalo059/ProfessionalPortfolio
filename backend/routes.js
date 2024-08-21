const express = require("express");

const router = express.Router();
const dataController = require("./dataController");

router.get("/projects", dataController.getAllProjects);

module.exports = router;
