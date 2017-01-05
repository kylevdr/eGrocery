import React from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';

export default class ProductDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			productInfo: []
		};
	}

	componentDidMount() {
		axios.get('./api/products/' + this.props.params.id).then((response) => {
			this.setState({
				productInfo: response.data[0]
			});
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 products-main">
						<h1 className="page-header">{this.state.productInfo.name}</h1>
						<div className="row">
							{/* TODO: OPTIMIZE COLUMN SIZES */}
							<div className="col-sm-6">
								<img className="product-details-main-img" src={this.state.productInfo.primary_img} alt={this.state.productInfo.name} />
							</div>
							<div className="col-sm-6">
								<p>Product description: {this.state.productInfo.description}</p>
								<p><b>${this.state.productInfo.price}</b></p>
								{/* TODO: IMPLEMENT ADD TO CART */}
								<button className="btn btn-primary">Add To Cart</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}