var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Lagical Point Technology! We are glad you are here.');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
