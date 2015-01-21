var React = require('react');

var SegmentedControl = React.createClass({
  render: function() {
    return (
      <div className="segmented-control">
        {this.props.children}
      </div>
    );
  }
});

module.exports = SegmentedControl;
