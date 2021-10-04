import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import startNowImg from '../../assets/images/start-now2.webp';
import './StartNow.css';

const StartNow = () => {
	return (
		<section className="start-now my-3 py-5">
			<Container>
				<Row xs={1} sm={1} md={2} className="g-4">
					<Col>
						<h1 className="text-white">
							<span className="text-warning">Greatest Courses</span> from world
							greatest university and the professor
						</h1>
						<p className="text-white py-3 start-now-text">
							Your customers won’t settle and neither should you. With Learn
							from anywhere, technology teams know more and work better
							together. Develop the skills you need for your top priorities.
							Improve workflows with actionable data. Build better—every time.
							With courses added regularly to our catalog, you always get the
							latest skills. Courses from €13.99.
						</p>
						<Button variant="warning" className="my-2" size="lg">
							START NOW
						</Button>
					</Col>
					<Col>
						<img src={startNowImg} className="w-100" alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default StartNow;
