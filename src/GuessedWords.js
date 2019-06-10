import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let content;
  if (guessedWords.length) {
    content = (
      <div data-test="guessed-words">
        <h2>Guessed Words</h2>
        <table className="table table-small">
          <thead className="thead-light">
            <tr>
              <th>Word</th>
              <th>Letters matched</th>
            </tr>
            {guessedWords.map((word, i) => {
              return (
                <tr data-test="guessed-word" key={i}>
                  <td>{word.guessedWord}</td>
                  <td>{word.lettersMatchCount}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    );
  } else {
    content = (
      <span data-test="guess-instructions">Try to guess the word!</span>
    );
  }

  return <div data-test="component-guessedwords">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      lettersMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
