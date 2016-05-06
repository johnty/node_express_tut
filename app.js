var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

//use middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components'))); //allows to reference folders

//define routes
app.use(require('./todos'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
