import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

describe("CounterButton", () => {
  it("updates when changing state or props", () => {
    const wrapper = shallow(<CounterButton color="blue" />);
    expect(wrapper.state()).toEqual({ count: 1 });

    const shouldUpdate = wrapper
      .instance()
      .shouldComponentUpdate({}, { count: 2 });
    expect(shouldUpdate).toBe(true);

    const shouldNotUpdate = wrapper
      .instance()
      .shouldComponentUpdate({}, { count: 1 });
    expect(shouldNotUpdate).toBe(false);
  });

  it("correctly increments the counter", () => {
    const wrapper = shallow(<CounterButton color="blue" />);
    wrapper.find("[id='counter']").simulate("click");

    expect(wrapper.state()).toEqual({ count: 2 });
  });

  it("expect CounterButton snapShot", () => {
    expect(shallow(<CounterButton color="blue" />)).toMatchSnapshot();
  });
});
