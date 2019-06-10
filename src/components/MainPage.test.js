import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

describe("MainPage", () => {
  let wrapper;
  let mainPageWrapper;

  beforeEach(() => {
    mainPageWrapper = (searchField = "", robots = [], isPending = false) => {
      const mockProps = {
        searchField,
        robots,
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        isPending
      };

      return shallow(<MainPage {...mockProps} />);
    };
  });

  it("should render MainPage without crashing", () => {
    wrapper = mainPageWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it("should render MainPage loading when isPending is true", () => {
    wrapper = mainPageWrapper("", [], true);
    expect(wrapper).toMatchSnapshot();
  });

  it("should filter robots", () => {
    wrapper = mainPageWrapper();
    expect(wrapper.instance().filteredRobots()).toEqual([]);

    wrapper = mainPageWrapper("steve", [{ name: "joe" }, { name: "lisa" }]);
    expect(wrapper.instance().filteredRobots()).toEqual([]);

    wrapper = mainPageWrapper("joe", [{ name: "joe" }, { name: "lisa" }]);
    expect(wrapper.instance().filteredRobots()).toEqual([{ name: "joe" }]);

    wrapper = mainPageWrapper("a", [{ name: "andy" }, { name: "alf" }]);
    expect(wrapper.instance().filteredRobots()).toEqual([
      { name: "andy" },
      { name: "alf" }
    ]);
  });
});
