import React from 'react';
import { Link } from 'react-router';

export default class UserCreated extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<h1>User Created</h1>
				<p><Link to="/login">Click here</Link> to log in with your new account.</p>
			</div>
		);
	}
}