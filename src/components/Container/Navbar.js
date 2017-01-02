import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-data">
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
            <IndexLink className="navbar-brand" to="/">eGrocery</IndexLink>
          </div>
					<div className="collapse navbar-collapse" id="navbar-data">
	          <ul className="nav navbar-nav navbar-right">
	            <li className="dropdown">
								<IndexLink activeClassName="navlink-active" className="dropdown-toggle" data-toggle="dropdown" to="/">
									Shop <span className="caret"></span>
								</IndexLink>
								<ul className="dropdown-menu">
									<li><Link to="/">All Products</Link></li>
									<li><Link to="/">Category 1</Link></li>
									<li><Link to="/">Category 2</Link></li>
									<li><Link to="/">Category 3</Link></li>
								</ul>
							</li>
							<li><IndexLink activeClassName="navlink-active" to="/cart">Cart</IndexLink></li>
	            <li><IndexLink activeClassName="navlink-active" to="/about">About</IndexLink></li>
	          </ul>
						{/*
						<form className="navbar-form navbar-right">
							<div className="input-group">
				        <input type="text" className="form-control" placeholder="Search" />
				        <div className="input-group-btn">
				          <button className="btn btn-default" type="submit">
				            <i className="glyphicon glyphicon-search" />
				          </button>
				        </div>
			      	</div>
						</form>
						*/}
        </div>
				</div>
      </nav>
		);
	}
}
