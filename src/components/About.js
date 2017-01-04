import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<div className="container-fluid content">
				<h1>eGrocery</h1>
				<p>The premier in online grocery shopping. Get your groceries delivered straight to your doorstep!</p>
				{/* TODO: INSERT SOCIAL LINKS */}
				<p>Designed and coded by Kyle VanDeRiet. [Social Links]</p>
				<p>This website is for demonstration purposes only. See the source code at <a href="https://github.com/kylevdr/eGrocery">https://github.com/kylevdr/eGrocery.</a></p>
			</div>
		);
	}
}
