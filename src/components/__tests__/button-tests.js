'use strict';

jest.dontMock('../button');
jest.dontMock('jquery');
jest.dontMock('lodash');

var $ = require('jquery');
var _ = require('lodash');

describe('Button', function() {
  var Button, button, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Button = require('../button');
    button = <Button />;
  });

  it('is a Button element', function() {
    expect(TestUtils.isElementOfType(button, Button)).toEqual(true);
  });

  it('is defined', function() {
    expect(Button).toBeDefined();
  });

  it('defaults label to empty string', function() {
    var elem = TestUtils.renderIntoDocument(button);
    expect(elem.props.label).toEqual('');
  });

  it('defaults type to default', function() {
    var elem = TestUtils.renderIntoDocument(button);
    expect(elem.props.type).toEqual('default');
  });

  it('has the button class', function() {
    var elem = TestUtils.renderIntoDocument(button);
    var node = elem.getDOMNode();
    expect($(node).hasClass('btn')).toEqual(true);
  });

  it('has outlined class', function() {
    var b = <Button type='primary' outlined={true} />;
    var elem = TestUtils.renderIntoDocument(b);
    var node = elem.getDOMNode();
    expect($(node).hasClass('btn-outlined')).toEqual(true);
  });

  it('has block class', function() {
    var b = <Button type='primary' block={true} />;
    var elem = TestUtils.renderIntoDocument(b);
    var node = elem.getDOMNode();
    expect($(node).hasClass('btn-block')).toEqual(true);
  });

  describe('type', function() {
    it('classes are set correctly', function() {
      var buttonTypes = [
        'primary',
        'positive',
        'negative',
        'link'
      ];

      _.each(buttonTypes, function(buttonType) {
        var b = <Button type={buttonType} />;
        var elem = TestUtils.renderIntoDocument(b);
        var node = elem.getDOMNode();
        expect($(node).hasClass('btn-default')).toEqual(false);
        expect($(node).hasClass('btn-' + buttonType)).toEqual(true);
      });
    });
  });
});