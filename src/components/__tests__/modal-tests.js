'use strict';

jest.dontMock('../modal');
jest.dontMock('jquery');

var $ = require('jquery');

describe('Modal', function() {
  var Modal, modal, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Modal = require('../modal');
    modal = <Modal id="test">Hello</Modal>;
  });

  it('is a Modal element', function() {
    expect(TestUtils.isElementOfType(modal, Modal)).toEqual(true);
  });

  it('is defined', function() {
    expect(Modal).toBeDefined();
  });

  it('sets modal class', function() {
    var elem = TestUtils.renderIntoDocument(modal);
    var node = elem.getDOMNode();
    expect($(node).hasClass('modal')).toEqual(true);
  });

  it('sets modal id', function() {
    var elem = TestUtils.renderIntoDocument(modal);
    expect(elem.props.id).toEqual('test');
    var node = elem.getDOMNode();
    expect($(node).attr('id')).toEqual('test');
  });

  it('sets content correctly', function() {
    var m = <Modal id="foo">Hello world!</Modal>;
    var elem = TestUtils.renderIntoDocument(m);
    var node = elem.getDOMNode();
    expect($(node).text()).toEqual('Hello world!');
  });
});
