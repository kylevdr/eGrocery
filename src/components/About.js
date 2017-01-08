import React from 'react';
import SocialLinks from './SocialLinks';

export default class About extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<h1>eGrocery</h1>
				<p>The premier in online grocery shopping. Get your groceries delivered straight to your doorstep!</p>
				<p>Designed and coded by Kyle VanDeRiet. <SocialLinks /></p>
				<p>This website is for demonstration purposes only. See the source code on <a target="_blank" href="https://github.com/kylevdr/eGrocery">GitHub</a>.</p>
			</div>
		);
	}
}
