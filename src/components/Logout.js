import React from 'react';
import { Link } from 'react-router';

export default class Logout extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<h1>Logout</h1>
				<p>You have successfully been logged out. <Link to="/">Click here</Link> to return to the home page.</p>
			</div>
		);
	}
}
