import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Header = () => {
	return (
		<Navbar className="bg_white" expand="lg">
			<Container>
				<NavLink className="navbar-brand" activeClassName="active" to="/">
					<Navbar.Brand
						to="#home"
						className="text-dark fw-bold fs-3 fst-italic"
					>
						Learn From Anywhere
					</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<NavLink
							exact
							className="nav-link mx-1 fw-bold fs-6 text-black"
							activeClassName="active bg_light_green rounded"
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							exact
							className="nav-link mx-1 fw-bold fs-6 text-black"
							activeClassName="active bg_light_green rounded"
							to="/courses"
						>
							Courses
						</NavLink>
						<NavLink
							exact
							className="nav-link  mx-1 fw-bold fs-6 text-black"
							activeClassName="active bg_light_green rounded"
							to="/about"
						>
							About
						</NavLink>
						<NavLink
							exact
							className="nav-link mx-1 fw-bold fs-6 text-black"
							activeClassName="active bg_light_green rounded"
							to="/contact"
						>
							Contact us
						</NavLink>
						<div className="d-flex align-items-center text-black fw-bold fs-6 rounded p-2">
							{searchIcon}
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
