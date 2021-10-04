import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
	console.log(props);
	const { courseName, startDate, img, category, enroll, comments, price } =
		props.course;

	return (
		<div>
			<Col className="h-100">
				<Card className="meal-card h-100 home-card">
					<Card.Img variant="top" src={img} />
					<Card.Body>
						<Card.Title className="text-muted">{courseName}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem className="fs-5 text-muted">
							Category: {category}
						</ListGroupItem>
						<ListGroupItem className="fs-5 text-muted">
							Start Date: {startDate}
						</ListGroupItem>
					</ListGroup>
					<Card.Footer className="text-center">
						<div className="d-flex align-items-center justify-content-between">
							<div>
								<FontAwesomeIcon icon={faUser} className="text-warning" />{' '}
								{enroll}
								<FontAwesomeIcon
									icon={faComment}
									className="text-warning ms-3"
								/>{' '}
								{comments}
							</div>
							<div>
								<h4 className="mb-0 text-warning">{price}</h4>
							</div>
						</div>
					</Card.Footer>
				</Card>
			</Col>
		</div>
	);
};

export default Course;
