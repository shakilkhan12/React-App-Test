const GitReducer = (state, action) => {
	if (action.type === 'SET_LOADER') {
		return {
			...state,
			loader: true,
		};
	} else if (action.type === 'CLOSE_LOADER') {
		return {
			...state,
			loader: false,
		};
	} else if (action.type === 'SET_POSTS') {
		return {
			...state,
			jobs: action.payload,
		};
	} else {
		return state;
	}
};
export default GitReducer;
