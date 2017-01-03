import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="col-sm-3 col-md-2 sidebar">
				<ul className="nav nav-sidebar">
					<li><Link activeClassName="active" to="/">All Products</Link></li>
					<li><Link activeClassName="active" to="/">Category 1</Link></li>
					<li><Link activeClassName="active" to="/">Category 2</Link></li>
					<li><Link activeClassName="active" to="/">Category 3</Link></li>
				</ul>
			</div>
		);
	}
}
