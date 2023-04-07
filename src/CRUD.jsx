import React, { Component } from 'react';

const data = [
	{ id: 1, name: 'Jack', age: 30 },
	{ id: 2, name: 'John', age: 25 },
	{ id: 3, name: 'Mark', age: 33 },
	{ id: 4, name: 'Tom', age: 35 },
	{ id: 5, name: 'Ann', age: 32 },
	{ id: 6, name: 'Smith', age: 36 },
	{ id: 7, name: 'Alice', age: 42 },
];

class CRUD extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: data,
			name: '',
			age: '',
			search: '',
		};
	}

	render() {
		const deleteUser = id => {
			const result = this.state.students.filter(value => value.id !== id);
			this.setState(previous => ({ ...previous, students: result }));
		};

		const onChange = e => {
			this.setState(previous => ({ ...previous, [e.target.name]: +e.target.value ? +e.target.value : e.target.value }));
		};

		const addUser = () => {
			if (this.state.name.length && +this.state.age >= 10) {
				const newUser = { id: this.state.students.length + 1, name: this.state.name, age: this.state.age };
				this.setState(previous => ({ ...previous, students: [...this.state.students, newUser], name: '', age: '' }));
			}
		};

		const onInputEnter = e => {
			// onKeyDown
			if (e.key === 'Enter') {
				addUser();
			}
		};

		const onSearchChange = e => {
			const result = data.filter(value => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
			this.setState(previous => ({ ...previous, students: result }));
		};

		console.log(this.state);

		return (
			<div>
				<h3>CRUD: Create; Read; Update; Delete</h3>
				<input type='text' placeholder='Search...' style={{ width: '300px' }} onChange={onSearchChange} />
				<ul>
					{this.state.students.map(value => (
						<li key={value.id}>
							{value.id}. {value.name} {value.age} <button onClick={() => deleteUser(value.id)}>Delete</button>
						</li>
					))}
				</ul>
				<input
					onChange={onChange}
					value={this.state.name}
					name='name'
					type='text'
					style={{ width: '200px' }}
					placeholder='Enter your Name'
				/>
				<input
					onChange={onChange}
					onKeyDown={onInputEnter}
					value={this.state.age}
					name='age'
					type='number'
					style={{ width: '130px' }}
					placeholder='Enter your Age'
				/>
				<button onClick={addUser}>Add User</button>
			</div>
		);
	}
}

export default CRUD;
