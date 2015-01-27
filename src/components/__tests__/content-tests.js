'use strict';

jest.dontMock('../content');
jest.dontMock('jquery');

var $ = require('jquery');

describe('Content', function() {
  var Content, content, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Content = require('../content');
    content = <Content />;
  });

  it('is a Content element', function() {
    expect(TestUtils.isElementOfType(content, Content)).toEqual(true);
  });

  it('is defined', function() {
    expect(Content).toBeDefined();
  });

  it('padded defaults to false', function() {
    var elem = TestUtils.renderIntoDocument(content);
    expect(elem.props.padded).toEqual(false); 
  });

  it('has the content class by default', function() {
    var elem = TestUtils.renderIntoDocument(content);
    var node = elem.getDOMNode();
    expect($(node).hasClass('content')).toEqual(true);
  });

  it('has the content-padded class when padded=true', function() {
    var elem = TestUtils.renderIntoDocument(<Content padded={true}>Foo</Content>);
    var node = elem.getDOMNode();
    expect($(node).hasClass('content')).toEqual(false);
    expect($(node).hasClass('content-padded')).toEqual(true);
  });

  it('sets content correctly', function() {
    var c = <Content>Hello world!</Content>;
    var elem = TestUtils.renderIntoDocument(c);
    var node = elem.getDOMNode();
    expect($(node).text()).toEqual('Hello world!');
  });



});
