import React from "react";

const Congrats = ({ success }) => {
  // return <div data-test="component-congrats" />;
  if (success) {
    return (
      <div data-test="component-congrats">
        <div data-test="congrats-message">
          Congratulations, you guessed the word, yay!
        </div>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

export default Congrats;
