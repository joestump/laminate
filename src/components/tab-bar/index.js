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

module.exports = TabBar;
