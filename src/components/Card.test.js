import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

describe("Card", () => {
  it("expect to render Card component", () => {
    expect(shallow(<Card />).length).toBe(1);
  });

  it("expect to match Card snapShot", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
