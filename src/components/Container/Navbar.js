import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: "",
		};
	}

	handleSearchChange(e) {
		this.setState({
			searchText: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		window.location = "/#/?search=" + this.state.searchText;
	}

	handleLogout() {
		axios.get('/logout').then(() => {
			this.props.checkLogin();
			window.location = "/#/logout";
		});
	}

	renderNavItems() {
		if (this.props.isLoggedIn) {
			return (
				<ul className="nav navbar-nav navbar-right">
					{/*
					<li className="dropdown">
						<IndexLink activeClassName="navlink-active" className="dropdown-toggle" data-toggle="dropdown" to="/">
							Shop <span className="caret"></span>
						</IndexLink>
						<ul className="dropdown-menu">
							<li><Link activeClassName="active" to="/">All Products</Link></li>
							<li><Link activeClassName="active" to="/">Produce</Link></li>
							<li><Link activeClassName="active" to="/">Meat</Link></li>
							<li><Link activeClassName="active" to="/">Dairy</Link></li>
							<li><Link activeClassName="active" to="/">Bakery</Link></li>
							<li><Link activeClassName="active" to="/">Packaged</Link></li>
						</ul>
					</li>
					*/}
					<li><IndexLink activeClassName="navlink-active" to="/">Shop</IndexLink></li>
					<li><IndexLink activeClassName="navlink-active" to="/cart">Cart</IndexLink></li>
					<li><a href="#" onClick={this.handleLogout.bind(this)}>Log Out</a></li>
					<li><IndexLink activeClassName="navlink-active" to="/about">About</IndexLink></li>
				</ul>
			);
		} else {
			return (
				<ul className="nav navbar-nav navbar-right">
					{/*
					<li className="dropdown">
						<IndexLink activeClassName="navlink-active" className="dropdown-toggle" data-toggle="dropdown" to="/">
							Shop <span className="caret"></span>
						</IndexLink>
						<ul className="dropdown-menu">
							<li><Link activeClassName="active" to="/">All Products</Link></li>
							<li><Link activeClassName="active" to="/">Produce</Link></li>
							<li><Link activeClassName="active" to="/">Meat</Link></li>
							<li><Link activeClassName="active" to="/">Dairy</Link></li>
							<li><Link activeClassName="active" to="/">Bakery</Link></li>
							<li><Link activeClassName="active" to="/">Packaged</Link></li>
						</ul>
					</li>
					*/}
					<li><IndexLink activeClassName="navlink-active" to="/">Shop</IndexLink></li>
					<li><IndexLink activeClassName="navlink-active" to="/login">Log In</IndexLink></li>
					<li><IndexLink activeClassName="navlink-active" to="/about">About</IndexLink></li>
				</ul>
			);
		}
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-data">
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<IndexLink className="navbar-brand" to="/">eGrocery</IndexLink>
					</div>
					<div className="collapse navbar-collapse" id="navbar-data">
						{this.renderNavItems.bind(this)()}
						<form className="navbar-form navbar-right" onSubmit={this.handleSubmit.bind(this)}>
							<div className="input-group">
								<input type="text" className="form-control" onChange={this.handleSearchChange.bind(this)} placeholder="Search" />
								<div className="input-group-btn">
									<button className="btn btn-default" type="submit">
										<i className="glyphicon glyphicon-search" />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}
