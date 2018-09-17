import React from 'react';
import Header from './header';
import GuessSection from './guessSection';
import StatusSection from './statusSection';
import InfoSection from './infoSection';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make a Guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make a Guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number!' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm...';
    } else if (difference >= 1) {
      feedback = 'You\'re HOT!';
    } else {
      feedback = 'CORRECT!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess],
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Header onRestartGame={() => this.restartGame()} />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} />
          <InfoSection />
        </main>
      </div>
    );
  }
}
