import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "./test/test-utils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "mouse", lettersMatchCount: 3 }]
};

const setup = (props = {}, state = null) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};
test("does not throw error with expected props ", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are not words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without crashing", () => {
    const appComponent = findByAttr(wrapper, "component-guessedwords");
    expect(appComponent.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const guessEl = findByAttr(wrapper, "guess-instructions");
    expect(guessEl.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});
