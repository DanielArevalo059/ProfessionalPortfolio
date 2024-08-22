import React, { useState, useEffect } from "react";
import "./ProjectSidebar.css";
import projects from "../data/projects.js";

function ProjectSidebar({ projectID }) {
  // console.log(projects);
  // console.log(projects[projectID]);
  const project = projects[projectID];
  const [newProjectID, setNewProjectID] = useState(projectID);
  return (
    <>
      <div className="sidebar-content">
        <h2>{project.title}</h2>
        <p>{project.body}</p>
      </div>
    </>
  );
}

export default ProjectSidebar;
