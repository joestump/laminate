'use strict';

var React = require('react/addons');
var ClickableComponentMixin = require('../mixins/clickable-component');

var Icon = React.createClass({
  mixins: [ClickableComponentMixin],
  propTypes: {
    type: React.PropTypes.oneOf([
      'default',
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
    ])
  },

  getDefaultProps: function() {
    return {
      type: 'default'
    };
  },

  render: function() {
    var typeClass = 'icon-' + this.props.type;
    var iconClasses = {
      'icon': true
    };

    iconClasses[typeClass] = (this.props.type !== 'default');
    var iconClassSet = React.addons.classSet(iconClasses);

    if (this.props.href.length) {
      return (
        <a className={iconClassSet} href={this.props.href} onClick={this.props.onClick}></a>
      );
    } else {
      return (
        <span className={iconClassSet} onClick={this.props.onClick}></span>
      );
    }
  }
});

module.exports = Icon;
