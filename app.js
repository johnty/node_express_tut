var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

//use middleware
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components'))); //allows to reference folders

var todoItems = [
 { id:1, desc: 'hello'},
 { id:2, desc: 'world'}
];

//define routes

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index', {
    items: todoItems 
  });
});

app.post('/add', function (req, res) {
  console.log("added ", req.body.newItem);
  var newItem = req.body.newItem;
  todoItems.push( {
       id: todoItems.length + 1,
       desc: newItem
  });
           
  res.redirect('/'); 
});

app.get('/usr/:id', function (req, res) {
  var userID = req.params.id;
  console.log('get user id ', userID);
  console.log('get user query =', req.query);
});

app.post('/give', function (req, res) {
  res.send('return from post');
});

app.get('/boo', function (req, res) {
  res.send('urns!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
