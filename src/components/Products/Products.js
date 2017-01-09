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
		this.getProducts();
	}

	componentDidUpdate() {
		this.getProducts();
	}

	getProducts() {
		if (this.props.location.query.category) {
			axios.get('./api/products/category?category=' + this.props.location.query.category).then((response) => {
				this.setState({
					products: response.data.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						} else if (a.name > b.name) {
							return 1;
						} else {
							return 0;
						}
					})
				});
			});
		} else if (this.props.location.query.search) {
			axios.get('./api/products/search?q=' + this.props.location.query.search).then((response) => {
				this.setState({
					products: response.data.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						} else if (a.name > b.name) {
							return 1;
						} else {
							return 0;
						}
					})
				});
			});
		} else {
			axios.get('./api/products').then((response) => {
				this.setState({
					products: response.data.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						} else if (a.name > b.name) {
							return 1;
						} else {
							return 0;
						}
					})
				});
			});
		}
	}

	renderPageHeader() {
		if (this.props.location.query.category) {
			return (
				<h1 className="capitalize">{this.props.location.query.category}</h1>
			);
		} else if (this.props.location.query.search) {
			return (
				<h1>Search Results</h1>
			);
		} else if (this.props.location.query.view === "all") {
			return (
				<h1>All Products</h1>
			);
		} else {
			// ADD CAROUSEL
			return (
				<h1>Products</h1>
			);
		}
	}

	renderProducts() {
		if (this.state.products.length === 0) {
			return (
				<div className="col-xs-6 col-sm-3"><p><strong>No Products Found</strong></p></div>
			);
		}
		return this.state.products.map((product, index) => {
			return <ProductItem key={index} {...product} />;
		});
	}

	render() {
		return (
			<div className="container-fluid products-main">
				<div className="row">
					<Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 products-main">
						{this.renderPageHeader()}
						<div className="row products-list">
							{this.renderProducts()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
