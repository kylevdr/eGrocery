import React from 'react';

export default class Signup extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<div className="container-fluid">
					<form className="form-signin">
						<h2 className="form-signin-heading">Sign Up</h2>
						<label htmlFor="inputEmail" className="sr-only">Email address</label>
						<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
						<label htmlFor="inputPassword" className="sr-only">Password</label>
						<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
						<button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
					</form>
					<p className="center-horizontal" style={{maxWidth: 800 + 'px'}}>This website is for demonstration purposes only. Connection information for the database can be found in the github repo
					and passwords are not encrypted. Please do not use the same username and password that you use for any other sites.</p>
				</div>
			</div>
		);
	}
}