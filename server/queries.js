module.exports = {
	findUser: (pool, username, password, callback) => {
		pool.connect(function(err, client, done) {
			var user = {};

			if(err) {
				return console.error('error fetching client from pool', err);
			}

			client.query('SELECT * FROM public."Users" WHERE username = $1 AND password = $2', [username, password], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				user = result.rows[0];

				done();

				callback(user);
			});
		});
	},
	getProducts: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query('SELECT * FROM public."Products"', function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				res.status(200).send(result.rows);

				done();
			});
		});
	},
	getProductById: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query('SELECT * FROM public."Products" WHERE id = $1', [req.params.id], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				res.status(200).send(result.rows);

				done();
			});
		});
	},
	getProductsByCategory: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query('SELECT * FROM public."Products" WHERE category = $1', [req.query.category], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				res.status(200).send(result.rows);

				done();
			});
		});
	},
	getProductsBySearchTerm: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query('SELECT * FROM public."Products" WHERE UPPER(name) LIKE $1 OR UPPER(description) LIKE $1 OR UPPER(category) LIKE $1', ['%' + req.query.q.toUpperCase() + '%'], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				res.status(200).send(result.rows);

				done();
			});
		});
	},
	createUser: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query("INSERT INTO public.\"Users\" (username, password, user_type) VALUES ($1, $2, 'user')", [req.body.username, req.body.password], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				done();
			});
		});
	},
	addToCart: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query("INSERT INTO public.\"Cart\" (user_id, product_id, quantity) VALUES ($1, $2, $3)", [req.user.id, req.body.itemId, req.body.quantity], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				res.status(200).send({redirect: '/#/success?item=' + req.body.itemName + '&quantity=' + req.body.quantity});

				done();
			});
		});
	},
	getCartProductsByUser: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query('SELECT *, public."Cart".id AS cart_id FROM public."Cart" JOIN public."Products" ON product_id = public."Products".id WHERE user_id = $1', [req.user.id], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				res.status(200).send(result.rows);

				done();
			});
		});
	},
	deleteCartItemById: (pool, req, res) => {
		pool.connect(function(err, client, done) {
			if(err) {
				return console.error('error fetching client from pool', err);
			}
			client.query('DELETE FROM public."Cart" WHERE id = $1', [req.params.id], function(err, result) {
				if(err) {
					return console.error('error running query', err);
				}

				res.status(200).send('success');

				done();
			});
		});
	}
}
