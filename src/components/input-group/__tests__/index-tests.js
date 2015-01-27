'use strict';

jest.dontMock('../index');
jest.dontMock('jquery');

var $ = require('jquery');

describe('InputGroup', function() {
  var InputGroup, inputGroup, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    InputGroup = require('../index');
    inputGroup = (
      <InputGroup />
    );
  });

  it('is a InputGroup element', function() {
    expect(TestUtils.isElementOfType(inputGroup, InputGroup)).toEqual(true);
  });

  it('is defined', function() {
    expect(InputGroup).toBeDefined();
  });

  it('has class input-group', function() {
    var elem = TestUtils.renderIntoDocument(inputGroup);
    var node = elem.getDOMNode();
    expect($(node).hasClass('input-group')).toEqual(true);
  });
});
