import React from "react";
import { useState, useRef, useEffect } from "react";
import ProjectSidebar from "../components/ProjectSidebar";

function ProjectsPage() {
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (sidebarRef.current) {
        if (
          !e.target.classList.contains("sidebar") &&
          !e.target.classList.contains("sidebar-toggle")
        ) {
          setSidebarToggled(false);
        }
      }
    }

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });
  return (
    <>
      <h2>Projects</h2>
      <aside ref={sidebarRef} className={`${sidebarToggled ? "visible" : ""}`}>
        ProjectSidebar
      </aside>
      <article>
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarToggled(true)}
        >
          Project Description
        </button>
      </article>
    </>
  );
}
export default ProjectsPage;
