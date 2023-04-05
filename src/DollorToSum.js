import React, { Component } from 'react';

class DollorToSum extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dollor: null,
			sum: null,
		};
	}

	render() {
		const onChange = e => {
			this.setState(previous => ({ ...previous, dollor: +e.target.value }));
		};

		const transfer = () => {
			let result = 15000 * this.state.dollor;
			this.setState(previous => ({ ...previous, sum: result }));
		};

		return (
			<div>
				Dollor kiriting <input type='number' placeholder='Enter dollor' onChange={onChange} /> 1$ o'zbek so'mida 15000 teng.{' '}
				<button onClick={transfer}>Transfer</button>
				<hr />
				{this.state.sum && this.state.dollor ? (
					<p>
						Siz kiritgan {this.state.dollor}$ o'zbek so'mida {this.state.sum}ga teng
					</p>
				) : (
					''
				)}
			</div>
		);
	}
}

export default DollorToSum;
