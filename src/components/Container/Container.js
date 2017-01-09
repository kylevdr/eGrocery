import React from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	componentDidMount() {
		this.checkLogin();
	}

	checkLogin() {
		axios.get('./checklogin').then((response) => {
			this.setState({
				isLoggedIn: response.data
			});
		});
	}

	render() {
		let children = React.cloneElement(this.props.children, {checkLogin: this.checkLogin.bind(this), isLoggedIn: this.state.isLoggedIn});
		return (
			<div id="container-wrapper">
				<Navbar isLoggedIn={this.state.isLoggedIn} checkLogin={this.checkLogin.bind(this)} />
				{children}
				<Footer />
			</div>
		);
	}
}
