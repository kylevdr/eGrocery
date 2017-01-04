import React from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';

export default class Products extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: []
		};
	}

	componentDidMount() {
		axios.get('./api/products').then((response) => {
			this.setState({
				products: response.data
			});
		});
	}

	renderProducts() {
		return this.state.products.map((product, index) => {
			return <div key={index} className="col-xs-6 col-sm-3 product-item">
				<h4>{product.name}</h4>
				<img className="products-list-img" src={product.primary_img} alt={product.name} />
				<p>${product.price}</p>
			</div>;
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 products-main">
						<h1 className="page-header">Products</h1>
						<div className="row products-list">
							{this.renderProducts()}
							{/*
								map products to:
								<div className="col-xs-6 col-sm-3 product-item">
									<img />
									<h4>{this.props.name}</h4>
									<p>{this.props.text}</p>
									etc.
								</div>
							*/}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
