import React from 'react';
import { shallow, mount, render } from "enzyme";
import  Card  from "./Card"

describe('Card', () => {
  it('', () => {
    expect(shallow(<Card />).length).toBe(1)
    expect(shallow(<Card />).contains()).toEqual(1)
  })
})
