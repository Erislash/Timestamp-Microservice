// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const routes = {
  index: require('./routes/index'),
  api: require('./routes/api')
};


app.use(routes.api);
app.use(routes.index);


const listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);
});
