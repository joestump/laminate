jest.dontMock('../icon');
jest.dontMock('jquery');
jest.dontMock('lodash');

var $ = require('jquery');
var _ = require('lodash');

describe('Icon', function() {
  var Icon, icon, React, TestUtils;

  beforeEach(function() {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Icon = require('../icon');
    icon = <Icon />;
  });

  it('is a Icon element', function() {
    expect(TestUtils.isElementOfType(icon, Icon)).toEqual(true);
  });

  it('is defined', function() {
    expect(Icon).toBeDefined();
  });

  it('defaults type to default', function() {
    var elem = TestUtils.renderIntoDocument(icon);
    expect(elem.props.type).toEqual('default');
  });

  it('has the icon class', function() {
    var elem = TestUtils.renderIntoDocument(icon);
    var node = elem.getDOMNode();
    expect($(node).hasClass('icon')).toEqual(true);
  });

  describe('type', function() {
    it('no icon type class is set by default', function() {
      var elem = TestUtils.renderIntoDocument(icon);
      var node = elem.getDOMNode();
      var iconClasses = [
        'icon-default',
        'icon-back',
        'icon-bars',
        'icon-caret',
        'icon-check',
        'icon-close',
        'icon-code',
        'icon-compose',
        'icon-download',
        'icon-edit',
        'icon-forward',
        'icon-gear',
        'icon-home',
        'icon-info',
        'icon-list',
        'icon-more-vertical',
        'icon-more',
        'icon-pages',
        'icon-pause',
        'icon-person',
        'icon-play',
        'icon-plus',
        'icon-refresh',
        'icon-search',
        'icon-share',
        'icon-sound',
        'icon-sound2',
        'icon-sound3',
        'icon-sound4',
        'icon-star-filled',
        'icon-star',
        'icon-stop',
        'icon-trash',
        'icon-up-nav',
        'icon-up',
        'icon-right-nav',
        'icon-right',
        'icon-down-nav',
        'icon-down',
        'icon-left-nav',
        'icon-left'
      ];
      _.each(iconClasses, function(iconClass) {
        expect($(node).hasClass('icon-default')).toEqual(false);
      });
    });

    var iconTypes = [
      'back',
      'bars',
      'caret',
      'check',
      'close',
      'code',
      'compose',
      'download',
      'edit',
      'forward',
      'gear',
      'home',
      'info',
      'list',
      'more-vertical',
      'more',
      'pages',
      'pause',
      'person',
      'play',
      'plus',
      'refresh',
      'search',
      'share',
      'sound',
      'sound2',
      'sound3',
      'sound4',
      'star-filled',
      'star',
      'stop',
      'trash',
      'up-nav',
      'up',
      'right-nav',
      'right',
      'down-nav',
      'down',
      'left-nav',
      'left'
    ];
    _.each(iconTypes, function(iconType) {
      it('sets icon-' + iconType + ' class when type="' + iconType + '"', function() {
        var i = <Icon type={iconType} inverted={true} />;
        var elem = TestUtils.renderIntoDocument(i);
        var node = elem.getDOMNode();
        var iconClass = 'icon-' + iconType;
        expect($(node).hasClass(iconClass)).toEqual(true);
      });
    });
  });
});
