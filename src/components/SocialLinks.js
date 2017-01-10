import React from 'react';

export default class SocialLinks extends React.Component {
	render() {
		return (
			<span>
				<a target="_blank" href="https://github.com/kylevdr"><i className="fa fa-github"></i></a>
				&nbsp;
				<a target="_blank" href="https://www.linkedin.com/in/kyle-vanderiet-39693193"><i className="fa fa-linkedin-square"></i></a>
				&nbsp;
				<a target="_blank" href="http://codepen.io/kylevdr/"><i className="fa fa-codepen"></i></a>
			</span>
		);
	}
}
