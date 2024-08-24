import React, { useState, useEffect } from "react";
import "./ProjectSidebar.css";
import GalagaProject from "./GalagaProject.js";
import PortfolioProject from "./PortfolioProject.js";
import DatabaseProject from "./DatabaseProject.js";
import BlankProject from "./BlankProject";

function ProjectSidebar({ projectID }) {
  // console.log(projects);
  // console.log(projects[projectID]);
  const [newProjectID, setNewProjectID] = useState(projectID);
  if (projectID === 0) {
    return <BlankProject />;
  } else if (projectID === 1) {
    return <GalagaProject />;
  } else if (projectID === 2) {
    return <PortfolioProject />;
  } else if (projectID === 3) {
    return <DatabaseProject />;
  }
}

export default ProjectSidebar;
