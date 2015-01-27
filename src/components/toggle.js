'use strict';

var React = require('react/addons');

var Toggle = React.createClass({
  propTypes: {
    onToggle: React.PropTypes.func.isRequired,
    toggled: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      toggled: false
    };
  },

  componentDidMount: function() {
    this.getDOMNode().addEventListener('toggle', this.onToggle, false);
  },

  componentWillUnmount: function() {
    this.getDOMNode().removeEventListener('toggle', this.onToggle);
  },

  onToggle: function(e) {
    this.props.onToggle(e.detail.isActive);
  },

  render: function() {
    var toggleClassSet = React.addons.classSet({
      'toggle': true,
      'active': this.props.toggled
    });

    return (
      <div className={toggleClassSet}>
        <div className="toggle-handle"></div>
      </div>
    );
  }
});

module.exports = Toggle;
