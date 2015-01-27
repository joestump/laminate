'use strict';

jest.dontMock('../icon');
jest.dontMock('jquery');
jest.dontMock('lodash');
jest.dontMock('../../mixins/clickable-component');

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

  describe('href', function() {
    it('is an <a/> when href is provided', function() {
      var i = <Icon href="#foo"/>;
      var elem = TestUtils.renderIntoDocument(i);
      var node = elem.getDOMNode();
      expect($(node)[0].tagName.toLowerCase()).toEqual('a');
    });

    it('is a <span/> when href is not provided', function() {
      var i = <Icon />;
      var elem = TestUtils.renderIntoDocument(i);
      var node = elem.getDOMNode();
      expect($(node)[0].tagName.toLowerCase()).toEqual('span');
    });
  });

  describe('type', function() {
    it('sets icon classes correctly', function() {
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
        var i = <Icon type={iconType} />;
        var elem = TestUtils.renderIntoDocument(i);
        var node = elem.getDOMNode();
        var iconClass = 'icon-' + iconType;
        expect($(node).hasClass(iconClass)).toEqual(true);
        expect($(node).hasClass('icon-default')).toEqual(false);
      });
    });
  });
});
