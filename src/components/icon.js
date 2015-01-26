var React = require('react/addons');

var Icon = React.createClass({
  propTypes: {
    type: React.PropTypes.oneOf([
      'default',
      'back',
      'bars',
      'caret',
      'check',
      'close',
      'code',
      'compose',
      'download',
      'edit',
      'forward',
      'gear',
      'home',
      'info',
      'list',
      'more-vertical',
      'more',
      'pages',
      'pause',
      'person',
      'play',
      'plus',
      'refresh',
      'search',
      'share',
      'sound',
      'sound2',
      'sound3',
      'sound4',
      'star-filled',
      'star',
      'stop',
      'trash',
      'up-nav',
      'up',
      'right-nav',
      'right',
      'down-nav',
      'down',
      'left-nav',
      'left'
    ])
  },

  getDefaultProps: function() {
    return {
      type: 'default'
    }
  },

  render: function() {
    var typeClass = 'icon-' + this.props.type;
    var iconClasses = {
      'icon': true
    };
    
    iconClasses[typeClass] = (this.props.type != 'default');
    var iconClassSet = React.addons.classSet(iconClasses);

    return (
      <span className={iconClassSet}></span>
    );
  }
});

module.exports = Icon;
