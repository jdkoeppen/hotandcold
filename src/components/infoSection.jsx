import React from 'react';
import './infoSection.css';

export default function InfoSection(props) {
  return (
    <section id="instructions" tabIndex="-1">
      <h2>What do I do?</h2>
      <p>This is a number guessing game. It goes like this:</p>
      <ol>
        <li>I'll think of a number between 1 and 100.</li>
        <li>You enter your guesses until you guess the correct number.</li>
        <li>
          After each guess I will tell you if the guess was close ('Hot') or not
          ('Cold').
        </li>
      </ol>
    </section>
  );
}
