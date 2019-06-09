import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

describe("MainPage", () => {
  fit("expect to render MainPage component", () => {
    const wrapper = shallow(
      <MainPage
        robots={[]}
        searchField={""}
        onRequestRobots={() => {}}
        onSearchChange={() => {}}
        isPending={false}
      />
    );
  });
});
