var React = require('react/addons');

var Badge = React.createClass({
  propTypes: {
    count: React.PropTypes.number.isRequired,
    type: React.PropTypes.oneOf([
      'default',
      'primary',
      'positive',
      'negative'
    ]),
    inverted: React.PropTypes.bool.isRequired 
  },

  getDefaultProps: function() {
    return {
      count: 0,
      type: 'default',
      inverted: false
    }
  },

  render: function() {
    var typeClass = 'badge-' + this.props.type;
    var badgeClasses = {
      'badge': true,
      'badge-inverted': this.props.inverted
    }
    badgeClasses[typeClass] = (this.props.type != 'default');
    var badgeClassSet = React.addons.classSet(badgeClasses);

    return (
      <span className={badgeClassSet}>{this.props.count}</span>
    );
  }
});

module.exports = Badge;
