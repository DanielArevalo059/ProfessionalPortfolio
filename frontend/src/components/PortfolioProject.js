import React from "react";

function PortfolioProject() {
  return (
    <div className="project-info">
      <h3>Professional Portfolio Website</h3>
      <p>
        This website you are currently visiting began as the final project for
        my Web Development course. Initially, the project included a React
        frontend, a Node.js and Express backend, and a MongoDB Database. The
        repo for a full-stack, MERN website implemented over a REST API can be
        found on my GitHub page,{" "}
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
      <p>
        For this project, I was able to utilize Unreal Engine's robust
        technology to personally create many elements of gameplay, including:
      </p>
      <dd>
        <li>
          The main player pawn actor including the spaceship mesh, firing button
          functionality, and projectile spawning with appropriate sound.
        </li>
      </dd>
      <dd>
        <li>
          Projectile collision detection with exploding sound and animation upon
          collision with attacking ships.
        </li>
      </dd>
      <dd>
        <li>
          Implemented the functionality for attacking ships to consistently aim
          at the moving player as well as spawn and detect collision for their
          projectiles.
        </li>
      </dd>
      <dd>
        <li>
          Implemented functions within blueprints for decrementing player health
          and incrementing score upon respective collisions.
        </li>
      </dd>
      <dd>
        <li>
          Created a widget to display the health bar, destroy the user's ship
          upon receiving its last hit point, and restarting the game.
        </li>
      </dd>
      <p></p>
      <div align="center">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/bJO1pWf96ew?start=630"
          title="My contribution to GalagaAR."
        ></iframe>{" "}
        <p style={{ fontSize: ".75em" }}>
          My contribution to GalagaAR. If you would like to view the video in
          its entirety, you may scroll to the beginning.
        </p>
      </div>
      <dt>
        <h4>What's next?</h4>
      </dt>
      <p>Some things I would modify and add to this project would be to:</p>
      <dd>
        <li>
          Optimize functionality such as less casting by creating reference
          variables, reconfigure the aiming mechanism to avoid using the event
          tick, and reorganize the UserShip Pawn class.
        </li>
      </dd>
      <dd>
        <li>
          Further align gameplay with Galaga, such as lining up opponents,
          adding multiple levels with increasing difficulty, and ability to add
          another user ship after capture.
        </li>
      </dd>
      <dd>
        <li>
          Implement Game Over functionality with leaderboard and high score
          data, adding powerups, and swapping ship meshes.
        </li>
      </dd>
      <dd>
        <li>
          Utilize AR capabilities by integrating gameplay with environmental
          obstacles.
        </li>
      </dd>
    </div>
  );
}

export default PortfolioProject;
