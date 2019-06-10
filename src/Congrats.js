import React from "react";
import PropTypes from "prop-types";

const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <div data-test="congrats-message">
          <p>Congratulations, you guessed the word, yay!</p>
        </div>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
