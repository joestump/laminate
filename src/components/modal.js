'use strict';

var React = require('react/addons');

var Modal = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div id={this.props.id} className="modal">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Modal;
