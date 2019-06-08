import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-congrats']");
  expect(appComponent.length).toBe(1);
});
