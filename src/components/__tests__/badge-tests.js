jest.dontMock('../badge');

describe('Badge', function() {
  var Badge, badge, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Badge = require('../badge');
    badge = <Badge />;
  });

  it('is a Badge element', function() {
    expect(TestUtils.isElementOfType(badge, Badge)).toEqual(true);
  });

  it('is defined', function() {
    expect(Badge).toBeDefined();
  });

  it('defaults count to zero', function() {
    var elem = TestUtils.renderIntoDocument(badge);
    expect(elem.props.count).toEqual(0);
  });

  it('defaults type to default', function() {
    var elem = TestUtils.renderIntoDocument(badge);
    expect(elem.props.type).toEqual('default');
  });

  it('defaults inverted to false', function() {
    var elem = TestUtils.renderIntoDocument(badge);
    expect(elem.props.inverted).toEqual(false);
  });

});
