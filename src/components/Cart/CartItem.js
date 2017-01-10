import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class CartItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		window.location = '/#/products/' + this.props.id;
	}

	handleRemove() {
		axios.delete('./deletecartitem/' + this.props.cart_id).then((response) => {
			this.props.getCartItems();
		});
	}

	render() {
		return (
			<div className="col-xs-12">
				<div className="thumbnail">
					<div className="row">
						<div className="col-xs-12 col-sm-4 col-md-3">
							<img onClick={this.handleClick.bind(this)} className="img-responsive cart-img" src={this.props.primary_img} alt={this.props.name} />
						</div>
						<div className="col-xs-12 col-sm-8 col-md-9">
							<h4><Link to={'/products/' + this.props.id}>{this.props.name}</Link></h4>
							<p><strong>Quantity: </strong>{this.props.quantity}</p>
							<p><strong>Price: </strong>${(this.props.price * this.props.quantity).toFixed(2)} (${this.props.price} each)</p>
							<button className="btn btn-danger" onClick={this.handleRemove.bind(this)}>Remove From Cart</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
