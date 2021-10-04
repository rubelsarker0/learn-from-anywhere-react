import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Courses from './components/Course/Course';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/home" exact component={Home} />
				<Route path="/courses" component={Courses} />
				<Route path="/about" component={About} />
				<Route path="*" component={PageNotFound} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
