import React, { useState, useEffect } from "react";
import "./ProjectSidebar.css";
import GalagaProject from "./GalagaProject.js";
import PortfolioProject from "./PortfolioProject.js";
import DatabaseProject from "./DatabaseProject.js";

function ProjectSidebar({ projectID }) {
  // console.log(projects);
  // console.log(projects[projectID]);
  const [newProjectID, setNewProjectID] = useState(projectID);
  if (projectID === 0) {
    return <GalagaProject />;
  } else if (projectID === 1) {
    return <PortfolioProject />;
  } else if (projectID === 2) {
    return <DatabaseProject />;
  }
}

export default ProjectSidebar;
