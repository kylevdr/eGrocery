import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

import Sidebar from './Sidebar';

export default class ProductDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			productInfo: [],
			showLoginPrompt: false,
			quantity: 1
		};
	}

	componentDidMount() {
		axios.get('./api/products/id/' + this.props.params.id).then((response) => {
			this.setState({
				productInfo: response.data[0]
			});
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.props.isLoggedIn) {
			axios.post('/addtocart', {
				itemId: this.state.productInfo.id,
				itemName: this.state.productInfo.name,
				quantity: this.state.quantity
			}).then((response) => {
				window.location = response.data.redirect;
			});
		} else {
			this.setState({
				showLoginPrompt: true
			});
		}
	}

	renderLoginPrompt() {
		if (this.state.showLoginPrompt) {
			return (
				<div className="alert alert-danger"><Link to="/login" className="alert-link"><strong>Log in</strong></Link> or <Link to="/signup" className="alert-link"><strong>sign up</strong></Link> to add this item to your cart.</div>
			);
		}
	}

	handleChange(e) {
		this.setState({
			quantity: e.target.value
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 products-main">
						<h1 className="page-header" style={{marginTop: 10}}>{this.state.productInfo.name}</h1>
						<div className="row">
							<div className="col-sm-6">
								<img className="img-responsive" src={this.state.productInfo.primary_img} alt={this.state.productInfo.name} />
							</div>
							<div className="col-sm-6">
								<h3>Description</h3>
								<p>{this.state.productInfo.description}</p>
								<h3>Category</h3>
								<p className="capitalize">{this.state.productInfo.category}</p>
								<h3>Price</h3>
								<p>${this.state.productInfo.price}</p>
								<br />
								<form onSubmit={this.handleSubmit.bind(this)}>
									{this.renderLoginPrompt()}
									<label>Quantity:
										<select className="form-control" onChange={this.handleChange.bind(this)} required>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
									</label>
									<button className="btn btn-primary" type="submit">Add To Cart</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}