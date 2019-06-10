import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let content;
  if (guessedWords.length) {
    return <div data-test="component-guessedwords">{content}</div>;
  } else {
    return (
      <div data-test="component-guessedwords">
        <span data-test="guess-instructions">Try to guess the word!</span>
      </div>
    );
  }
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
