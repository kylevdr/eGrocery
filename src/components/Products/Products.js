import React from 'react';

import Sidebar from './Sidebar';

export default class Products extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 products-main">
						<h1 className="page-header">Products</h1>
						<div className="row products-list">
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
