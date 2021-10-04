import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = (props) => {
	return (
		<Container className="py-5">
			{props.children}
			<Row xs={1} md={3} className="g-4">
				{props.courses?.map((course) => (
					<Course course={course} key={course.id}></Course>
				))}
			</Row>
			<div className="text-center">
				{props.detailsButton && (
					<Link to="/courses" className="btn btn-primary btn-lg my-3">
						ALL THE COURSES
					</Link>
				)}
			</div>
		</Container>
	);
};

export default Courses;
