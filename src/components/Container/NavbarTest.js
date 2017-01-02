import React from 'react';
import { Link, IndexLink } from 'react-router';

class NavItem extends React.Component {
  render () {
    const { router } = this.context
    const { index, onlyActiveOnIndex, to, children, ...props } = this.props

    const isActive = router.isActive(to, onlyActiveOnIndex)
    const LinkComponent = index ? Link : IndexLink

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent {...props}>{children}</LinkComponent>
      </li>
    )
  }
}

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">eGrocery</IndexLink>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <NavItem to="/">Shop</NavItem>
            <NavItem to="/about">About</NavItem>
          </ul>
        </div>
      </nav>
		);
	}
}
