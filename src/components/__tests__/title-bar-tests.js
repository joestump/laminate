'use strict';

jest.dontMock('../title-bar');
jest.dontMock('jquery');

var $ = require('jquery');

describe('TitleBar', function() {
  var titleBar, TitleBar, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    TitleBar = require('../title-bar');
    titleBar = <TitleBar title="Hello!" />;
  });

  it('is a TitleBar element', function() {
    expect(TestUtils.isElementOfType(titleBar, TitleBar)).toEqual(true);
  });

  it('is defined', function() {
    expect(TitleBar).toBeDefined();
  });

  it('sets the title correctly', function() {
    var elem = TestUtils.renderIntoDocument(titleBar);
    expect(elem.props.title).toEqual('Hello!');
    var node = elem.getDOMNode();
    expect($('h1.title', node).text()).toEqual('Hello!');
  });

  it('sets bar and bar-nav classes', function() {
    var elem = TestUtils.renderIntoDocument(titleBar);
    var node = elem.getDOMNode();
    expect($(node).hasClass('bar')).toEqual(true);
    expect($(node).hasClass('bar-nav')).toEqual(true);
  });
});
