import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "./test/test-utils";

import GuessedWords from "./GuessedWords";
import { stat } from "fs";

const defaultProps = {
  guessedWords: [{ guessedWord: "mouse", lettersMatchCount: 3 }]
};

const setup = (props = {}, state = null) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, "component-guessedwords");
  expect(appComponent.length).toBe(1);
});

test("does not throw error with expected props ", () => {
  checkProps(GuessedWords, defaultProps);
});
