'use strict';

var React = require('react/addons');

var Button = React.createClass({
	propTypes: {
		label: React.PropTypes.string.isRequired,
		type: React.PropTypes.oneOf([
			'default',
			'primary',
			'positive',
			'negative',
			'link'
		]),
		outlined: React.PropTypes.bool,
		block: React.PropTypes.bool,
		icon: React.PropTypes.element,
		badge: React.PropTypes.element
	},

	getDefaultProps: function() {
		return {
			label: '',
			type: 'default',
			outlined: false,
			block: false,
			icon: null,
			badge: null
		};
	},

	render: function() {
		var typeClass = 'btn-' + this.props.type;
		var buttonClasses = {
			'btn': true,
			'btn-outlined': this.props.outlined,
			'btn-block': this.props.block
		};

		buttonClasses[typeClass] = (this.props.type !== 'default');
		var buttonClassSet = React.addons.classSet(buttonClasses);

		return (
			<button className={buttonClassSet}>{this.props.icon}{this.props.label}{this.props.badge}</button>
		);
	}
});

module.exports = Button;
