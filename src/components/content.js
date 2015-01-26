'use strict';

var React = require('react/addons');

var Content = React.createClass({
  propTypes: {
    padded: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      padded: false
    };
  },

  render: function() {
    var contentClasses = React.addons.classSet({
      'content': !this.props.padded,
      'content-padded': this.props.padded
    });

    return (
      <div className={contentClasses}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Content;
