jest.dontMock('../button');

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

  it('defaults label to null', function() {
    var elem = TestUtils.renderIntoDocument(button);
    expect(elem.props.label).toEqual(null);
  });

  it('defaults type to default', function() {
    var elem = TestUtils.renderIntoDocument(button);
    expect(elem.props.type).toEqual('default');
  });

  it('defaults inverted to false', function() {
    var elem = TestUtils.renderIntoDocument(button);
    expect(elem.props.inverted).toEqual(false);
  });

});
