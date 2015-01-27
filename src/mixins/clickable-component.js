var React = require('react');

var ClickableComponentMixin = {
  propTypes: {
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      href: '',
      onClick: undefined
    };
  }
};

module.exports = ClickableComponentMixin;
