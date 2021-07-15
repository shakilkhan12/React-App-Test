import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GitProvider from './context/providers/GitProvider';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
	return (
		<>
			<Router>
				<GitProvider>
					<Nav />
					<div className='container'>
						<Switch>
							<Route path='/' exact component={Home} />
						</Switch>
					</div>
				</GitProvider>
			</Router>
		</>
	);
}

export default App;
