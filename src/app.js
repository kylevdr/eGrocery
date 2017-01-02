import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Container from './components/Container/Container';
import Products from './components/Products/Products';
import Cart from './components/Cart';
import About from './components/About';
import NotFound from './components/NotFound';

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Products} />
					<Route path='/cart' component={Cart} />
					<Route path='/about' component={About} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
