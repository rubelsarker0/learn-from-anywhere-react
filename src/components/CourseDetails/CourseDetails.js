import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useCourse from '../../Hooks/useCourse';
import { useParams } from 'react-router';
import Course from '../Course/Course';

const CourseDetails = () => {
	const { id } = useParams();
	const [course] = useCourse(id);
	return (
		<Container>
			<Row>
				<Col className="mx-auto my-4" md={6}>
					<Course course={course ? course : {}}></Course>
				</Col>
			</Row>
		</Container>
	);
};

export default CourseDetails;
