const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();

// DATABASE CONFIG

const config = require('./server/config');
let pool = new pg.Pool(config.config);

// KNEX/BOOKSHELF

// const knex = require('knex')({
//   client: 'pg',
//   connection: config
// });

// const bookshelf = require('bookshelf')(knex);

// var Product = bookshelf.Model.extend({
// 	tableName: 'Products',

// });

// START SERVER

app.set('port', (process.env.PORT || 3000));

app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
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
});

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});

// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// });

// pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     if (err) return console.log(err);
//     client.query('SELECT * FROM test_table', function(err, result) {
//         done();
//         if(err) return console.error(err);
//         console.log(result.rows);
//     });
// });
