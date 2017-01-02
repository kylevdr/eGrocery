const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('dist'));

app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});