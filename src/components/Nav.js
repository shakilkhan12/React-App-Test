import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
const Nav = () => {
	return (
		<nav className='nav'>
			<div className='navContainer'>
				<li>
					<Link>Home</Link>
				</li>

				<li>
					<Link>Jobs</Link>
				</li>
				<li>
					<form>
						<BsSearch className='searchIcon' />
						<input
							type='text'
							placeholder='Search jobs...'
							className='searchControl'
						/>
					</form>
				</li>
			</div>
		</nav>
	);
};

export default Nav;
