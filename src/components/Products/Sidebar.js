import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="col-sm-3 col-md-2 sidebar">
				<ul className="nav nav-sidebar">
					<li><Link activeClassName="active" to="/">All Products</Link></li>
					<li><Link activeClassName="active" to="/">Produce</Link></li>
					<li><Link activeClassName="active" to="/">Meat</Link></li>
					<li><Link activeClassName="active" to="/">Dairy</Link></li>
					<li><Link activeClassName="active" to="/">Bakery</Link></li>
					<li><Link activeClassName="active" to="/">Packaged</Link></li>
				</ul>
			</div>
		);
	}
}
