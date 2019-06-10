import React from "react";
import GuessWords from "./GuessedWords";
import Congrats from "./Congrats";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Jotto</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Congrats success={true} />
          <GuessWords
            guessedWords={[
              { guessedWord: "train", lettersMatchCount: 3 },
              { guessedWord: "agile", lettersMatchCount: 1 }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
