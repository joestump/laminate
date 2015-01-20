var React = require('react/addons');

var TitleBar = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      title: ''
    }
  }, 

  render: function() {
    return (
      <header className="bar bar-nav">
        {this.props.children}
        {this.props.title.length > 0 ? <h1 className="title">{this.props.title}</h1> : ''}
      </header>
    );
  }
});
