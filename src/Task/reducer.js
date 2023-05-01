const data = [
	{ id: 1, firstName: 'Jack', lastname: 'Smith', age: 30 },
	{ id: 2, firstName: 'John', lastname: 'Johnov', age: 35 },
	{ id: 3, firstName: 'Mark', lastname: 'Markov', age: 40 },
	{ id: 4, firstName: 'Ann', lastname: 'Annov', age: 50 },
];

const INITIAL_STATE = { users: data };

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_USER': {
			const { userId } = action.payload;
			let res = state.users.filter(user => user.id !== userId);
			return { ...state, users: res };
		}

		case 'SEARCH': {
			let res = data.filter(user => user.firstName.toLowerCase().includes(action.payload.value.toLowerCase()));

			return { ...state, users: res };
		}

		default: {
			return state;
		}
	}
};

export { reducer, INITIAL_STATE };
