import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseDetails from './components/CourseDetails/CourseDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AllCourses from './components/AllCourses/AllCourses';
import Courses from './components/Course/Course';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import './App.css';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/home" exact component={Home} />
				<Route exact path="/courses">
					<AllCourses></AllCourses>
				</Route>
				<Route path="/courses" exact component={Courses} />
				<Route exact path="/courses/course/:id">
					<CourseDetails></CourseDetails>
				</Route>
				<Route path="/about" exact component={About} />
				<Route exact path="/contact">
					<Contact></Contact>
				</Route>
				<Route path="*" component={PageNotFound} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
