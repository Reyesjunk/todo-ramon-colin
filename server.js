var express = require('express');

var app = express();

app.use(function(req, res, next) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  });  
  next();
});


app.get('/', (req, res) => {
  res.json({})
});

app.post('/', (req, res) => {
  res.json({'title':'a todo'});
});

app.delete('/', (req, res) => {
  res.send('DELETE request to homepage');
  // res.status(201).end();
});

app.listen(process.env.PORT || 8080);

exports.app = app;
