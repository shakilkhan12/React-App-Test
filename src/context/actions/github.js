import axios from 'axios';
export const jobs = async (options) => {
	const { dispatch } = options;
	dispatch({ type: 'SET_LOADER' });
	try {
		const { data } = await axios.get('/positions.json');
		console.log(data);
		dispatch({ type: 'CLOSE_LOADER' });
		dispatch({ type: 'SET_POSTS', payload: data });
	} catch (error) {
		dispatch({ type: 'CLOSE_LOADER' });
	}
};
