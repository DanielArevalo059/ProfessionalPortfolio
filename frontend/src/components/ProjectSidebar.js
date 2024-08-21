import React, { useState } from "react";
import "./ProjectSidebar.css";

function ProjectSidebar() {
  //Retrieve project json from backend
  const loadProject = async () => {
    const response = await fetch('/project');
    const project = await response.json();
  };
  return (
    <>
      <div classname="sidebar-content">
        <h2>Sidebar</h2>
        <p>Sidebar Content</p>
      </div>
    </>
  );
}

export default ProjectSidebar;
