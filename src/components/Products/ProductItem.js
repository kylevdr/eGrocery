import React from 'react';
import { Link } from 'react-router';

export default class ProductItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		window.location = '/#/products/' + this.props.id;
	}

	render() {
		return (
			<div className="col-xs-6 col-sm-3 product-item">
				<h4><Link to={'/products/' + this.props.id}>{this.props.name}</Link></h4>
				<img onClick={this.handleClick.bind(this)} className="products-list-img" src={this.props.primary_img} alt={this.props.name} />
				<p>${this.props.price}</p>
			</div>
		);
	}
}