import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

describe("CardList", () => {
  it("expect to match CardList snapShot", () => {
    const mockRobots = [
      {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv"
      }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
