import React from 'react';
import SocialLinks from './SocialLinks';

export default class About extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<div className="text-center">
					<h1>eGrocery</h1>
					<p>This website is for demonstration purposes only. See the source code on <a target="_blank" href="https://github.com/kylevdr/eGrocery">GitHub</a>.</p>
					<p>Created by Kyle VanDeRiet. <SocialLinks /></p>
				</div>
			</div>
		);
	}
}
