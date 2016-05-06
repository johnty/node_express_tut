var express = require('express');

var router = express.Router();

var todoItems = [
 { id:1, desc: 'hello'},
 { id:2, desc: 'world'}
];

router.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index', {
    items: todoItems 
  });
});

router.post('/add', function (req, res) {
  console.log("added ", req.body.newItem);
  var newItem = req.body.newItem;
  todoItems.push( {
       id: todoItems.length + 1,
       desc: newItem
  });
           
  res.redirect('/'); 
});

router.get('/usr/:id', function (req, res) {
  var userID = req.params.id;
  console.log('get user id ', userID);
  console.log('get user query =', req.query);
});

router.post('/give', function (req, res) {
  res.send('return from post');
});

router.get('/boo', function (req, res) {
  res.send('urns!');
});

module.exports = router;
