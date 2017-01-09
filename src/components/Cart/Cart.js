import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import CartItem from './CartItem';

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cartItems: [],
			showCheckoutAlert: false
		};
	}

	componentDidMount() {
		if (this.props.isLoggedIn) {
			this.getCartItems();
		}
	}

	handleCheckout() {
		this.setState({
			showCheckoutAlert: true
		});
	}

	getCartItems() {
		axios.get('./getusercart').then((response) => {
			this.setState({
				cartItems: response.data
			});
		});
	}

	renderCartItems() {
		return this.state.cartItems.map((item, index) => {
			return <CartItem key={index} {...item} getCartItems={this.getCartItems.bind(this)} />;
		});
	}

	renderCheckoutAlert() {
		if (this.state.showCheckoutAlert) {
			return (
				<div className="alert alert-info text-center">This website is for demonstration purposes only. Thanks for checking it out!</div>
			);
		}
	}

	renderShoppingCart() {
		if (!this.props.isLoggedIn) {
			return (
				<p><Link to="/login">Log in</Link> or <Link to="/signup">sign up</Link> to access your cart.</p>
			);
		} else {
			if (this.state.cartItems.length === 0) {
				return (
					<p>Your shopping cart is empty</p>
				);
			}
			return (
				<span>
					<div className="row">
						{this.renderCartItems()}
					</div>
					<div className="row">
						{this.renderCheckoutAlert()}
					</div>
					<div className="row">
						<p className="text-center"><strong>Total: </strong>${this.state.cartItems.reduce((a, b) => { return a + b.price * b.quantity }, 0).toFixed(2)}</p>
					</div>
					<div className="row">
						<button className="btn btn-primary center-block" onClick={this.handleCheckout.bind(this)}>Check Out</button>
					</div>
				</span>
			);
		}
	}

	render() {
		return (
			<div className="container-fluid content">
				<h1>Shopping Cart</h1>
				{this.renderShoppingCart()}
			</div>
		);
	}
}
