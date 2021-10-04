import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import {
	faUserGraduate,
	faAtlas,
	faSpaceShuttle,
} from '@fortawesome/free-solid-svg-icons';
import './CustomerJourney.css';

const CustomerJourney = () => {
	return (
		<section className="my-5">
			<Container>
				<Row md={3} lg={3} xs={1} className="g-4">
					<Col className="text-center icon-color">
						<FontAwesomeIcon className="fa-8x mb-2" icon={faUserGraduate} />
						<p className="text-black fs-5">
							Top Most Graduation Complete <br /> University and Collage
						</p>
					</Col>
					<Col className="text-center icon-color">
						<FontAwesomeIcon icon={faAtlas} className="fa-8x mb-2" />
						<p className="text-black fs-5">
							Earn certificates <br /> recognized globally
						</p>
					</Col>
					<Col className="text-center icon-color">
						<FontAwesomeIcon icon={faSpaceShuttle} className="fa-8x mb-2" />
						<p className="text-black fs-5">
							Build cool projects to <br /> showcase your skills
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CustomerJourney;
