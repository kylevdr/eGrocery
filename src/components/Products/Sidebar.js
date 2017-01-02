import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Sidebar extends React.Component {
	render() {
		return (
			<div>
				<ul className="sidebar-nav">
          <li><Link to="/">All Products</Link></li>
          <li><Link to="/">Category 1</Link></li>
          <li><Link to="/">Category 2</Link></li>
          <li><Link to="/">Category 3</Link></li>
        </ul>
			</div>
		);
	}
}
