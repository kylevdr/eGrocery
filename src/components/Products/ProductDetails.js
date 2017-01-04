import React from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';

export default class ProductDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			product: []
		};
	}

	componentDidMount() {
		axios.get('./api/products/' + this.props).then((response) => {
			this.setState({
				product: response.data
			});
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 products-main">
						<h1 className="page-header">Products</h1>
						<div className="row">
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}