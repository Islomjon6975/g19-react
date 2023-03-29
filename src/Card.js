import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		// console.log(this);
		return (
			<div className='card__container'>
				<div className='card__image-wrapper'></div>
				<h4 className='card__title'>{this.props.title}</h4>
				<p className='card__description'>{this.props.country}</p>
				<p>${this.props.price}</p>
				<button>Add to cart</button>
			</div>
		);
	}
}

export { Card };
