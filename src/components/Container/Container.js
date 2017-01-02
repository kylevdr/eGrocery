import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

export default class Container extends React.Component {
	render() {
		return (
			<div id="container-wrapper">
				<Navbar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}
