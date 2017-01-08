import React from 'react';
import SocialLinks from '../SocialLinks';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<p className="text-center">&copy; Kyle VanDeRiet 2017 <SocialLinks /></p>
			</footer>
		);
	}
}