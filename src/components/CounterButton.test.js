import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

describe("CounterButton", () => {
  it("expect to match CounterButton snapShot", () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
  });

  it("updates when changing state or props", () => {
    const wrapper = shallow(<CounterButton />);
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
});
