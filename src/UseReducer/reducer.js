const INTIAL_STATE = { counter: 0, name: 'Jack' };

const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT_QUANTITY': {
			let res = { ...state, counter: state.counter + 1 };
			return res;
		}
		case 'DECREMENT_QUANTITY': {
			let res = { ...state, counter: state.counter - 1 };
			return res;
		}
		case 'INCREMENT_BY_VALUE': {
			let res = { ...state, counter: state.counter + action.payload.value };
			return res;
		}
		case 'ONCHAGE': {
			console.log(action);
			let res = { ...state, name: action.payload.value };
			return res;
		}
		default: {
			return state;
		}
	}
};

export { INTIAL_STATE, reducer };
