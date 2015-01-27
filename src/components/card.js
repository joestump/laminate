'use strict';

var React = require('react');

var Card = React.createClass({
  propTypes: {
    id: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      id: ''
    };
  },

  render: function() {
    return (
      <div className="card" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Card;
