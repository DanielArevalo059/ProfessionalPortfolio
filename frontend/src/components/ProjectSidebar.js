import React, { useState, useEffect } from "react";
import "./ProjectSidebar.css";

function ProjectSidebar() {
  const [projects, setProjects] = useState([]);
  //Retrieve project json from backend
  const loadProjects = async () => {
    const response = await fetch('/projects');
    const data = await response.json();
    console.log(data);
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);
  return (
    <>
      <div classname="sidebar-content">
        <h2>Sidebar</h2>
        <p>Sidebar Content</p>
        <p>{projects}</p>
      </div>
    </>
  );
}

export default ProjectSidebar;
