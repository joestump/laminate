'use strict';

var React = require('react');

var Card = React.createClass({
  render: function() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Card;
