import React from 'react';
import './topNav.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a
            href="#instructions"
            className="instructions"
            aria-label="How to Play"
          >
            Intructions
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a New Game"
            onClick={() => props.onRestartGame()}
          >
            Start New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}
