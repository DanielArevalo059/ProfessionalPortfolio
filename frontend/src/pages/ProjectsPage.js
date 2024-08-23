import React from "react";
import { useState, useRef, useEffect } from "react";
import ProjectSidebar from "../components/ProjectSidebar";
// import "../components/ProjectSidebar.css";

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
          setProjectID(2);
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
      <aside
        ref={sidebarRef}
        className={`sidebar ${sidebarToggled ? "visible" : ""}`}
      >
        <ProjectSidebar projectID={projectID} />
      </aside>
      <article>
        <dl className="project-description">
          <dt>
            <h3>Capstone Project: GalagaAR</h3>
          </dt>
          <em>Unreal Engine | Augmented Reality | Xcode</em>
          <p>
            <dd>
              <strong>Collaborated</strong> with three classmates to develop a
              robust AR version of the classic arcade game, Galaga.
            </dd>
          </p>
          <p>
            <dd>
              <strong>Leveraged</strong> Unreal Engine's cutting-edge AR
              libraries and blueprinting system to create a deployable iOS
              application through Xcode.
            </dd>
          </p>
          <p>
            <dd>
              <strong>Facilitated </strong>effective communication within the
              team, ensuring alignment on project goals, timelines, and
              technical challenges.
            </dd>
          </p>
          <p>
            <dd>
              <strong>Contributed</strong> to all stages of the project
              lifecycle, including design, development, testing, and deployment,
              showcasing strong teamwork and problem-solving skills.
            </dd>
          </p>
          <button
            className="sidebar-toggle"
            onClick={() => {
              setProjectID(0);
              setSidebarToggled(true);
            }}
          >
            Show More
          </button>
          <p></p>
          Project Poster:{" "}
          <a href="../../images/CS367_Poster.jpg" target="_blank">
            Available Here
          </a>
          <p></p>
          GitHub Repository:{" "}
          <a
            href="https://github.com/psargeant/CS467_Capstone_Project"
            target="_blank"
          >
            Available Here
          </a>
          <p>
            <button
              className="sidebar-toggle"
              onClick={() => {
                setProjectID(1);
                setSidebarToggled(true);
              }}
            >
              Show More
            </button>
          </p>
          <button
            className="sidebar-toggle"
            onClick={() => {
              setProjectID(2);
              setSidebarToggled(true);
            }}
          >
            Show More
          </button>
        </dl>
      </article>
    </>
  );
}
export default ProjectsPage;
