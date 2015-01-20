var React = require('react');

var InputGroupRow = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  }

  render: function() {
    return (
      <div className="input-row">
        <label>{this.props.label}</label>
        {this.props.children}
      </div>
    );
  }
});

module.exports = InputGroupRow;
