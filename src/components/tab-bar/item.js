'use strict';

var React = require('react');

var TabBarItem = React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool.isRequired
  },

  getDefaultProps: function() {
    return {
      active: false
    };
  },

  render: function() {
    var itemClasses = {
      active: this.props.active,
      
    };
    itemClasses['tab-item'] = true;

    var itemClassSet = React.addons.classSet(itemClasses);

    return (
      <a className={itemClassSet} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
});
