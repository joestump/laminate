jest.dontMock('../badge');
jest.dontMock('jquery');
jest.dontMock('lodash');

var $ = require('jquery');
var _ = require('lodash');

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

  it('has the badge class', function() {
    var elem = TestUtils.renderIntoDocument(badge);
    var node = elem.getDOMNode();
    expect($(node).hasClass('badge')).toEqual(true);
  });

  describe('type', function() {
    it('no badge type class is set by default', function() {
      var elem = TestUtils.renderIntoDocument(badge);
      var node = elem.getDOMNode();
      var badgeClasses = [
        'badge-default', 'badge-primary', 'badge-positive', 'badge-negative'
      ];
      _.each(badgeClasses, function(badgeClass) {
        expect($(node).hasClass('badge-default')).toEqual(false);
      });
    });

    var badgeTypes = ['primary', 'positive', 'negative'];
    _.each(badgeTypes, function(badgeType) {
      it('sets badge-' + badgeType + ' class when type="' + badgeType + '"', function() {
        var b = <Badge type={badgeType} inverted={true} />;
        var elem = TestUtils.renderIntoDocument(b);
        var node = elem.getDOMNode();
        var badgeClass = 'badge-' + badgeType;
        expect($(node).hasClass(badgeClass)).toEqual(true);
      });
    });
  });
});
