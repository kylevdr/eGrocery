import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
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

	handleSubmit(e) {
		e.preventDefault();
		axios.post('/login', {
			username: this.state.username,
			password: this.state.password
		}).then((response) => {
			window.location = response.data.redirect;
		});
	}

	renderLoginFailure() {
		if (this.props.location.query.login === 'failed') {
			return (
				<div className="alert alert-danger">
					<strong>Login Failed.</strong> You may have entered an incorrect username or password.
				</div>
			);
		}
	}

	render() {
		return (
			<div className="container-fluid content">
				<div className="container-fluid">
					<form onSubmit={this.handleSubmit.bind(this)} className="form-signin" action="/login" method="post">
						<h2 className="form-signin-heading">Log In</h2>
						{this.renderLoginFailure()}
						<input type="text" onChange={this.handleUsernameChange.bind(this)} name="username" className="form-control" placeholder="Username" required />
						<input type="password" onChange={this.handlePasswordChange.bind(this)} name="password" className="form-control" placeholder="Password" required />
						{/*}
						<div className="checkbox">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						*/}
						<button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
						<p>Don't have an account? <Link to="/signup">Sign up</Link>!</p>
					</form>
				</div>
			</div>
		);
	}
}