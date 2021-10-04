import React from 'react';
import {
	Col,
	Container,
	Row,
	InputGroup,
	FormControl,
	Button,
} from 'react-bootstrap';

const Contact = () => {
	return (
		<>
			<section className="py-5" style={{ margin: '80px 0' }}>
				<Container>
					<Row>
						<Col md={8} className="mx-auto">
							<div className="text-center">
								<h1>Contact Us Today</h1>
								<h5>
									Your email address will not be published. Required fields are
									marked
								</h5>
							</div>
							<InputGroup className="mt-4">
								<FormControl
									className="w-100 my-3 rounded"
									placeholder="Enter Your name *"
								></FormControl>
								<FormControl
									className="w-100 my-3 rounded"
									placeholder="Enter Your Email *"
								></FormControl>
								<FormControl
									className="w-100 my-3 rounded"
									placeholder="Subject *"
								></FormControl>
								<textarea
									className="w-100 rounded form-control"
									rows="7"
									cols="7"
									placeholder="Enter your message"
								></textarea>
							</InputGroup>
							<Button className="my-4" variant="success">
								Send Message!
							</Button>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Contact;
