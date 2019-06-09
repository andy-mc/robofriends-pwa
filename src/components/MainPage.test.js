import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

describe("MainPage", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      robots: [],
      searchField: "",
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      isPending: false
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("render MainPage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should filter robots", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
