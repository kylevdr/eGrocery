import React from 'react';

export default class Signup extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<h1>Sign Up</h1>
				<p>This website is for demonstration purposes only. Connection information for the database can be found in the github repo
				and passwords are not encrypted. Please do not use the same username and password that you use for any other sites.</p>
				<p>Username</p>
				<p>Password</p>
			</div>
		);
	}
}