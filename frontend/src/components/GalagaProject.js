import React from "react";
import "./ProjectSidebar.css";

function GalagaProject() {
  return (
    <div className="project-info">
      <h3>GalagaAR</h3>
      <p>
        For my Capstone project, my team and I recreated the classic arcade game
        Galaga in Augmented Reality for iOS using Unreal Engine's AR libraries
        and blueprinting system.
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
      <div align="center">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/bJO1pWf96ew?start=630"
        ></iframe>
      </div>
      <dt>
        <h4>What's next?</h4>
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
          The main player pawn actor including the spaceship mesh, firing button
          functionality, and projectile spawning with appropriate sound.
        </li>
      </dd>
      <dd>
        <li>
          The main player pawn actor including the spaceship mesh, firing button
          functionality, and projectile spawning with appropriate sound.
        </li>
      </dd>
      <dd>
        <li>
          The main player pawn actor including the spaceship mesh, firing button
          functionality, and projectile spawning with appropriate sound.
        </li>
      </dd>
    </div>
  );
}

export default GalagaProject;
