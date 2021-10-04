import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerImg from '../../assets/images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
	return (
		<section className="footer footer-color overflow-hidden">
			<Container>
				<Row md={2} lg={2} xs={1} className="g-4">
					<Col className="text-center">
						<img src={footerImg} alt="" className="text-white w-100" />
					</Col>
					<Col className=" d-flex align-items-center justify-content-center">
						<ul className="social-icons d-flex justify-content-center list-unstyled">
							<li>
								<a className="" href="https://www.facebook.com/rubelsarker8">
									<FontAwesomeIcon
										icon={faFacebook}
										className="fa-2x m-2 footer-icon-color"
									/>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/rubelsarker0">
									<FontAwesomeIcon
										icon={faTwitter}
										className="fa-2x m-2 footer-icon-color"
									/>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/rubelsarker0/">
									<FontAwesomeIcon
										icon={faInstagram}
										className="fa-2x m-2 footer-icon-color"
									/>
								</a>
							</li>
							<li>
								<a href="https://github.com/rubelsarker0">
									<FontAwesomeIcon
										icon={faGithub}
										className="fa-2x m-2 footer-icon-color"
									/>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer;
