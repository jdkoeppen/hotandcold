import React from 'react';

import Feedback from './feedback';
import GuessForm from './guessForm';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess Section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onGuess={guess => props.onGuess(guess)} />
    </section>
  );
}
