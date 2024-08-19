import React, { useState } from "react";
import "./ProjectSidebar.css";

function ProjectSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} Project Description
      </button>
      <div className={`project-sidebar ${isOpen ? "open" : ""}`}>
        <div classname="sidebar-content">
          <h2>Sidebar</h2>
          <p>Sidebar Content</p>
        </div>
      </div>
    </>
  );
}

export default ProjectSidebar;
