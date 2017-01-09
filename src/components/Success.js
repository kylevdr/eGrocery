import React from 'react';
import { Link } from 'react-router';

export default class Success extends React.Component {
	render() {
		if (this.props.location.query.item && this.props.location.query.quantity) {
			return (
				<div className="container-fluid content">
					<h1>Success!</h1>
					<p>Quantity <strong>{this.props.location.query.quantity}</strong> of product <strong>{this.props.location.query.item}</strong> successfully added to your cart.</p>
					<p><Link to="/">Keep shopping</Link> or <Link to="/cart">go to your cart</Link>.</p>
				</div>
			);
		} else {
			return (
				<div className="container-fluid content">
					<h1>Oops!</h1>
					<p>You may have reached this page by accident. <Link to="/">Click here</Link> to go back to the homepage.</p>
				</div>
			);
		}
	}
}