import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			confirmPassword: "",
			passwordError: false
		};
	}

	handleUsernameChange(e) {
		this.setState({
			username: e.target.value
		});
	}

	handlePasswordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleConfirmPasswordChange(e) {
		this.setState({
			confirmPassword: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.password === this.state.confirmPassword) {
			this.setState({
				passwordError: false
			});
			axios.post('/register', {
				username: this.state.username,
				password: this.state.password
			}).then((response) => {
				window.location = response.data.redirect;
			});
		} else {
			this.setState({
				passwordError: true
			});
		}
	}

	renderPasswordError() {
		if (this.state.passwordError) {
			return (
				<div className="alert alert-danger">
					Passwords must match.
				</div>
			);
		}
	}

	render() {
		return (
			<div className="container-fluid content">
				<div className="container-fluid">
					<form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
						<h2 className="form-signin-heading">Sign Up</h2>
						<input type="text" name="username" onChange={this.handleUsernameChange.bind(this)} className="form-control" placeholder="Username" required />
						<input type="password" name="password" onChange={this.handlePasswordChange.bind(this)} className="form-control" placeholder="Password" required />
						<input type="password" name="confirmPassword" onChange={this.handleConfirmPasswordChange.bind(this)} className="form-control" placeholder="Confirm Password" required />
						{this.renderPasswordError()}
						<button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
					</form>
					<p className="center-horizontal" style={{maxWidth: 800 + 'px'}}>This website is for demonstration purposes only. 
					Connection information for the database can be found in the GitHub repo, and passwords are not encrypted. 
					Please do not use the same username and password that you use on any other sites.</p>
				</div>
			</div>
		);
	}
}