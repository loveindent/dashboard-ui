/* eslint-disable quotes */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Box from './Box';

describe("Box Component", function() {
  it("should render correctly with minimum options", function() {
    expect(shallow(<Box>test</Box>).matchesElement(
      <section className="Box">
        <div className="Box__content">test</div>
      </section>
    )).to.equal(true)
  });

  it("should render correctly with header", function() {
    expect(shallow(<Box><header>header</header>test</Box>).matchesElement(
      <section className="Box">
        <header className="Box__head">header</header>
        <div className="Box__content">test</div>
      </section>
    )).to.equal(true)
  });
});
