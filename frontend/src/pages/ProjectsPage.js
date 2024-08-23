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
          <div className="experience">
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
                lifecycle, including design, development, testing, and
                deployment, showcasing strong teamwork and problem-solving
                skills.
              </dd>
            </p>
          </div>
          <table className="project-table">
            <thead>
              <tr>
                <th style={{ width: "20%" }}></th>
                <th style={{ width: "auto" }}></th>
                <th style={{ width: "auto" }}></th>
                <th style={{ width: "auto" }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button
                    className="sidebar-toggle"
                    onClick={() => {
                      setProjectID(0);
                      setSidebarToggled(true);
                    }}
                  >
                    View Full Desription
                  </button>
                </td>
                <td
                  rowSpan={"3"}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  <img
                    id="GalagaAR-Gameplay-1"
                    src="../images/GalagaAR-Gameplay-1.png"
                    alt="GalagaAR gameplay example"
                    style={{ width: "60%", height: "auto" }}
                  />
                </td>
                <td
                  rowSpan={"3"}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  <img
                    id="GalagaAR-Gameplay-2"
                    src="../images/GalagaAR-Gameplay-2.png"
                    alt="GalagaAR gameplay example"
                    style={{ width: "60%", height: "auto" }}
                  />
                </td>
                <td
                  rowSpan={"3"}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  <img
                    id="GalagaAR-Gameplay-3"
                    src="../images/GalagaAR-Gameplay-3.png"
                    alt="GalagaAR gameplay example"
                    style={{ width: "60%", height: "auto" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Project Poster:{" "}
                  <a href="../../images/CS367_Poster.jpg" target="_blank">
                    Available Here
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  GitHub Repository:{" "}
                  <a
                    href="https://github.com/psargeant/CS467_Capstone_Project"
                    target="_blank"
                  >
                    Available Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p></p>
        </dl>
        <dl className="project-description">
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
