'use strict';

var React = require('react/addons');
var _ = require('lodash');

var SegmentedControlItem = React.createClass({
  props: {
    label: React.PropTypes.string.isRequired,
    href: React.PropTypes.string,
    active: React.PropTypes.bool.isRequired
  },

  getDefaultProps: function() {
    return {
      active: false
    };
  },

  render: function() {
    var itemClasses = React.addons.classSet({
      'control-item': true,
      'active': this.props.acive
    });

    if (_.isString(this.props.href) && this.props.href.length) {
      return (
        <a className={itemClasses} href={this.props.href}>{this.props.label}</a>
      );
    } else {
      return (
        <a className={itemClasses}>{this.props.label}</a>
      );
    }
  }
});

module.exports = SegmentedControlItem;
