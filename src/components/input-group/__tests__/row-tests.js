'use strict';

jest.dontMock('../row');
jest.dontMock('jquery');

var $ = require('jquery');

describe('InputGroupRow', function() {
  var InputGroupRow, inputGroupRow, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    InputGroupRow = require('../row');
    inputGroupRow = (
      <InputGroupRow label="test">
        <input type="text"/>
      </InputGroupRow>
    );
  });

  it('is a InputGroupRow element', function() {
    expect(TestUtils.isElementOfType(inputGroupRow, InputGroupRow)).toEqual(true);
  });

  it('is defined', function() {
    expect(InputGroupRow).toBeDefined();
  });

  it('has class input-row', function() {
    var elem = TestUtils.renderIntoDocument(inputGroupRow);
    var node = elem.getDOMNode();
    expect($(node).hasClass('input-row')).toEqual(true);
  });
});
