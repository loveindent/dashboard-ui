/* eslint-disable quotes */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Container from './Container'

describe("Container", function() {
  it("should render correctly with minimum options", function() {
    expect(shallow(<Container>test</Container>).matchesElement(
      <div className="Container">test</div>
    )).to.equal(true)
  })
})
