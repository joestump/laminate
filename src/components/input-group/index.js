'use strict';

var React = require('react');

var InputGroup = React.createClass({
  render: function() {
    return (
      <form className="input-group">
        {this.props.children}
      </form>
    );
  }
});

InputGroup.Row = require('./row');

module.exports = InputGroup;
