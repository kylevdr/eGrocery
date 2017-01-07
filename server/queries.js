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
}