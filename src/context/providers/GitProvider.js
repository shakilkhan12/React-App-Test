import { useReducer } from 'react';
import GitContext from '../GitContext';
import GitReducer from '../reducers/GitReducer';
const GitProvider = ({ children }) => {
	const initState = { loader: false, jobs: [] };
	const [state, dispatch] = useReducer(GitReducer, initState);
	return (
		<GitContext.Provider value={{ state, dispatch }}>
			{children}
		</GitContext.Provider>
	);
};
export default GitProvider;
