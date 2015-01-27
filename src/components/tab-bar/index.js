'use strict';

var React = require('react');

var TabBar = React.createClass({
  render: function() {
    return (
      <nav class="bar bar-tab">
        {this.props.children}
      </nav>
    );
  }
});

TabBar.Item = require('./item');
TabBar.Label = require('./label');

module.exports = TabBar;
