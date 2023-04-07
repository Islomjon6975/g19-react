import React, { Component } from 'react';

class DollorToSum extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dollor: null,
			sum: null,
			age: null,
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

		const Yosh = () => {
			this.setState(previous => ({ ...previous, age: 2023 - this.state.dollor }));
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
				<button onClick={Yosh}>Get Age</button>
				{this.state.age} yoshsiz
			</div>
		);
	}
}

export default DollorToSum;
