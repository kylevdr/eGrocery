import React from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
import ProductItem from './ProductItem';

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
			return <ProductItem key={index} {...product} />;
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
						</div>
					</div>
				</div>
			</div>
		);
	}
}
