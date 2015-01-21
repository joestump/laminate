var React = require('react/addons');

var Content = React.createClass({
  propTypes: {
    padded: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      padded: false
    }
  }

  render: function() {
    padding = React.addons.classSet({
      'content': !this.props.padded,
      'content-padded': this.props.padded
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
});
