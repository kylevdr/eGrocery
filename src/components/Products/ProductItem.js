import React from 'react';

export default class ProductItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		window.location = '/#/products/' + this.props.id;
	}

	render() {
		return (
			<div className="col-xs-6 col-sm-3 product-item" onClick={this.handleClick.bind(this)}>
				<h4>{this.props.name}</h4>
				<img className="products-list-img" src={this.props.primary_img} alt={this.props.name} />
				<p>${this.props.price}</p>
			</div>
		);
	}
}