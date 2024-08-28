import React from "react";

function PortfolioProject() {
  return (
    <div className="project-info">
      <h3>Professional Portfolio Website</h3>
      <p>
        This Single Page Application you are currently visiting began as the
        final project for my Web Development course. Initially, the project
        included a React frontend with endpoints to a Node.js and Express
        backend that interacted with a MongoDB Database. The repo for a
        full-stack, MERN website implemented over a REST API can be found on my
        GitHub page,{" "}
        <a
          href="https://github.com/DanielArevalo059/Web-Dev-Portfolio-Project"
          target="_blank"
          rel="noreferrer"
        >
          here.
        </a>
      </p>
      <dt>
        <h4>What did I contribute?</h4>
      </dt>
      <dd>
        <li>
          Leveraged React's component-based architecture to create reusable UI
          components.
        </li>
      </dd>
      <dd>
        <li>
          Utilized React's hook functions for managing local component state and
          handling side effects to enhance responsiveness.
        </li>
      </dd>
      <dd>
        <li>
          Integrated React Router to manage navigation within the SPA, allowing
          for seamless transition between different pages while maintaining
          application state.
        </li>
      </dd>
      {/* <dd>
        <li>
          Created a Contact Me page through{" "}
          <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer">
            EmailJS
          </a>{" "}
          which allows email submission directly from the client's side.
        </li>
      </dd> */}

      <p></p>

      <dt>
        <h4>What's next?</h4>
      </dt>
      <p>To enhance this project, I would like to:</p>
      <dd>
        <li>
          Expand the functionality and user experience, making it more
          interactive and user-friendly.
        </li>
      </dd>
      <dd>
        <li>
          Further break down the pages and their components to create a more
          scalable product.
        </li>
      </dd>
      <dd>
        <li>
          Host my database projects through this site by developing a backend
          with endpoints that interact with a SQL and noSQL database.
        </li>
      </dd>
    </div>
  );
}

export default PortfolioProject;
