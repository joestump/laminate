'use strict';

var React = require('react/addons');

var Content = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    padded: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      padded: false,
      id: ''
    };
  },

  render: function() {
    var contentClasses = React.addons.classSet({
      'content': !this.props.padded,
      'content-padded': this.props.padded
    });

    return (
      <div className={contentClasses} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Content;
