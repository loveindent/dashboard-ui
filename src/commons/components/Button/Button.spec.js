/* eslint-disable quotes */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Button from './Button'

describe("Button Component", function() {
  it("should render correctly with minimum options", function() {
    expect(shallow(<Button>test</Button>).matchesElement(
      <button className="Button">test</button>
    )).to.equal(true)
  })

  it("should render correctly with a modifier", function() {
    expect(shallow(<Button modifiers="iAmAModifier">test</Button>).matchesElement(
      <button className="Button Button--iAmAModifier">test</button>
    )).to.equal(true)
  })
})
