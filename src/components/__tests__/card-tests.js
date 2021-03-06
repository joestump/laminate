'use strict';

jest.dontMock('../card');
jest.dontMock('jquery');
jest.dontMock('lodash');

var $ = require('jquery');

describe('Card', function() {
  var Card, card, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Card = require('../card');
    card = <Card />;
  });

  it('is a Card element', function() {
    expect(TestUtils.isElementOfType(card, Card)).toEqual(true);
  });

  it('is defined', function() {
    expect(Card).toBeDefined();
  });

  it('has the card class', function() {
    var elem = TestUtils.renderIntoDocument(card);
    var node = elem.getDOMNode();
    expect($(node).hasClass('card')).toEqual(true);
  });

  it('sets content correctly', function() {
    var c = <Card>Hello world!</Card>;
    var elem = TestUtils.renderIntoDocument(c);
    var node = elem.getDOMNode();
    expect($(node).text()).toEqual('Hello world!');
  });
});
