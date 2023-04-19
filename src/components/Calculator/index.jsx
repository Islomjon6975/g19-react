import React, { useState } from 'react';

function Calculator() {
	const [calculator, setCalculator] = useState({ n1: '0', n2: '0', option: '+', result: '' });

	const onChange = e => {
		const { name, value } = e.target;
		setCalculator(prev => ({ ...prev, [name]: value }));
	};

	const onSelectChange = e => {
		const { value } = e.target;
		setCalculator(prev => ({ ...prev, option: value }));
	};

	const calculateResult = () => {
		let res = eval(`${calculator.n1}${calculator.option}${calculator.n2}`);
		setCalculator(prev => ({ ...prev, result: res }));
	};

	const reset = () => {
		setCalculator(prev => ({ ...prev, n1: '0', n2: '0', option: '+', result: '' }));
	};

	return (
		<div>
			<h3>Calculator:</h3>
			<input type='number' placeholder='Number 1' value={calculator.n1} onChange={onChange} name='n1' />
			<select onChange={onSelectChange} value={calculator.option}>
				<option value='+'>+</option>
				<option value='-'>-</option>
				<option value='*'>*</option>
				<option value='/'>/</option>
				<option value='%'>%</option>
			</select>
			<input type='number' placeholder='Number 2' value={calculator.n2} onChange={onChange} name='n2' />
			<button onClick={calculateResult}>=</button>
			<span>{calculator.result}</span>
			<button onClick={reset}>C</button>
		</div>
	);
}

export default Calculator;
