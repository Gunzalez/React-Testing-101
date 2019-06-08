import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

import { findByAttr } from "./test/test-utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, "component-congrats");
  expect(appComponent.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test('renders none empty congrat message "success" prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByAttr(wrapper, "congrats-message");
  expect(message.text()).not.toBe("");
});
