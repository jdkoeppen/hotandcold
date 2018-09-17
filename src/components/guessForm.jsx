import React from 'react';
import './guessForm.css';

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onGuess) {
      const value = this.input.value;
      this.props.onGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <input
          type="number"
          name="guessInput"
          id="guessInput"
          className="text"
          autoComplete="off"
          ref={input => (this.input = input)}
          required
        />
        <button type="submit" name="submit" id="guessButton" className="button">
          Guess!
        </button>
      </form>
    );
  }
}
