import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<h1>Log In</h1>
				<p>Enter your username and password.</p>
				<p>Don't have an account? <Link to="/signup">Sign up.</Link></p>
			</div>
		);
	}
}