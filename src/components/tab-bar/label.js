'use strict';

var React = require('react/addons');

var TabBarLabel = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired
  },

  getDefaultProps: function() {
    return {
      href: '',
      active: false
    };
  },

  render: function() {
    var labelClasses = React.addons.classSet({
      'tab-item': this.props.href.length,
      'tabe-label': !this.props.href.length,
      'active': this.props.active
    });

    if (this.props.href.length) {
      return (
        <a className={labelClasses} href={this.props.href}>{this.props.text}</a>
      );
    } else {
      return (
        <span className={labelClasses}>{this.props.text}</span>
      );
    }
  }
});

module.exports = TabBarLabel;
