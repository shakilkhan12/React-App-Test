import { useEffect, useContext } from 'react';
import GitContext from '../context/GitContext';
import { jobs } from '../context/actions/github';
import Loader from '../components/Loader';
const Home = () => {
	const {
		dispatch,
		state: { jobs: allJobs, loader },
	} = useContext(GitContext);
	useEffect(() => {
		jobs({ dispatch });
	}, []);
	console.log(allJobs);
	return !loader ? (
		<div className='allJobs'>
			<div className='jobsHeading'>
				<div className='row'>
					<div className='col-2'>title</div>
					<div className='col-2'>Type</div>
					<div className='col-2'>Location</div>
				</div>
			</div>
			{allJobs.map((job) => (
				<div className='jobs'>
					<div className='row'>
						<div className='col-2'>
							<p>{job.title}</p>
						</div>
						<div className='col-2'>
							<p>{job.type}</p>
						</div>
						<div className='col-2'>
							<p>{job.location}</p>
						</div>
						<div className='col-2'></div>
						<div className='col-2'></div>
					</div>
				</div>
			))}
		</div>
	) : (
		<Loader />
	);
};

export default Home;
