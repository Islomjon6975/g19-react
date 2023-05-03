import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const UserContext = createContext();
export const useUsersContext = () => useContext(UserContext);

const users = [
	{ _id: 1, name: 'Jack' },
	{ _id: 2, name: 'John' },
	{ _id: 3, name: 'Mark' },
];

const INITIAL_STATE = {
	users: users,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_USER': {
			let res = state.users.filter(user => user._id !== action.payload._id);
			return { ...state, users: res };
		}
		case 'SEARCH_USER': {
			let res = users.filter(user => user.name.toLowerCase().includes(action.payload.value.toLowerCase()));
			console.log(res);
			return { ...state, users: res };
		}

		default:
			return state;
	}
};

function UserContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
