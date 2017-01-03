const express = require('express');
const pg = require('pg');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('dist'));

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
