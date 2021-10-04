import CustomerJourney from '../CustomerJourney/CustomerJourney';
import StartNow from '../StartNow/StartNow';
import Courses from '../Courses/Courses';
import useCourses from '../../Hooks/useCourses';

const Home = () => {
	const [courses, setCourses] = useCourses();

	return (
		<>
			<StartNow />
			<CustomerJourney />
			<Courses courses={courses?.slice(0, 5)} detailsButton>
				<h1 className="fw-bold text-center my-5 text-muted">
					Courses Starting Soon
				</h1>
			</Courses>
		</>
	);
};

export default Home;
