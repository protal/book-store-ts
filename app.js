const bodyParser = require('body-parser')
const express = require('express');

const bookRoute = require('./src/routes/bookRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/books', bookRoute)

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
