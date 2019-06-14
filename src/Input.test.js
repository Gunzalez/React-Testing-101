import React from "react";
import { shallow } from "enzyme";

import { findByAttr, storeFactory } from "./test/test-utils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render testing", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: false });
    });
    test("renders without error", () => {
      const componentDiv = findByAttr(wrapper, "component-input");
      expect(componentDiv.length).toBe(1);
    });
    test("renders input field", () => {
      const inputBox = findByAttr(wrapper, "input-field");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been corectly guessed", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test("renders without crashing", () => {
      const componentDiv = findByAttr(wrapper, "component-input");
      expect(componentDiv.length).toBe(1);
    });
    test("does not render input field", () => {
      const inputBox = findByAttr(wrapper, "input-field");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit button", () => {
      const submitButton = findByAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("update state testing", () => {});
