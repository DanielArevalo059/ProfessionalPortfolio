import React from "react";
import { useState } from "react";
import ProjectSidebar from "../components/ProjectSidebar";

function ProjectsPage() {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  return (
    <>
      <h2>Projects</h2>
      <aside className={`${sidebarToggled ? "visible" : ""}`}>
        ProjectSidebar
      </aside>
      <article>
        <button className="sidebar-toggle" onClick={() => setSidebarToggled(true)}>Project Description</button>
      </article>
    </>
  );
}
export default ProjectsPage;
