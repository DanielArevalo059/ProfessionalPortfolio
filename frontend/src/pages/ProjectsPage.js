import React from "react";
import { useState, useRef, useEffect } from "react";
import ProjectSidebar from "../components/ProjectSidebar";

function ProjectsPage() {
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [projectID, setProjectID] = useState(0);
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
        <ProjectSidebar projectID={projectID} />
      </aside>
      <article>
        <button
          className="sidebar-toggle"
          onClick={() => {
            setProjectID(0);
            setSidebarToggled(true);
          }}
        >
          Show More
        </button>
        <button
          className="sidebar-toggle"
          onClick={() => {
            setProjectID(1);
            setSidebarToggled(true);
          }}
        >
          Show More
        </button>
        <button
          className="sidebar-toggle"
          onClick={() => {
            setProjectID(2);
            setSidebarToggled(true);
          }}
        >
          Show More
        </button>
      </article>
    </>
  );
}
export default ProjectsPage;
