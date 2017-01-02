import React from 'react';

import Sidebar from './Sidebar';

export default class Products extends React.Component {
	render() {
		return (
			<div id="products-wrapper">
				<Sidebar />
				<div className="container-fluid">
					<h1>Products</h1>
				</div>
			</div>
		);
	}
}
