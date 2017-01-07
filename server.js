const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const secrets = require('./server/secrets');
const config = require('./server/config');
const queries = require('./server/queries');

const app = express();

app.use(session({
  secret: secrets.sessionSecret,
  saveUninitialized: false,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

// DATABASE CONFIG

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

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});

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

app.get('/api/products/:id', (req, res) => {
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
});

app.post('/register', (req, res) => {
	console.log(req.body);
	res.send({redirect: '/#/usercreated'});
	//redirect to usercreated
});

passport.use(new LocalStrategy(
  function(username, password, done) {
  	queries.findUser(pool, username, password, (user) => {
  		if (!user) {
  			return done(null, false);
  		}
  		console.log(user);
  		return done(null, user);
  	});
  	
    // User.findOne({ username: username }, function(err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
  }
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

// app.post('/login',
// 	passport.authenticate('local', 
// 	{
// 		// successRedirect: '/loginsuccess',
// 		// failureRedirect: '/loginfailure'
// 		successRedirect: '/#/?login=success',
// 		failureRedirect: '/#/login?login=failed'
// 	},
// 	function(req, res) {
// 		console.log('executing function');
// 		console.log('Logged in as: ' + req.body);
// 		res.redirect('/');
// 	}
// 	)
// );

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send({redirect: '/loginfailure'}); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send({redirect: '/loginsuccess'});
    });
  })(req, res, next);
});

app.get('/loginsuccess', (req, res, next) => {
	res.send('Login success.');
});

app.get('/loginfailure', (req, res, next) => {
	res.send('Login failed.');
});


