/* eslint-disable quotes */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Icon from './Icon'

describe("Icon", function() {
  it("should render correctly with minimum options", function() {
    expect(shallow(<Icon>test</Icon>).matchesElement(
      <span className="Icon icon-test"></span>
    )).to.equal(true)
  })
})
