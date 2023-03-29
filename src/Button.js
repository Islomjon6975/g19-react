import React, { Component } from 'react';

class Button extends Component {
	render() {
		console.log(this);
		return <button style={{ backgroundColor: this.props.bg, color: this.props.color }}>{this.props.children}</button>;
	}
}

export default Button;
