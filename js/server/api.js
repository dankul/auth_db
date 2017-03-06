var express = require('express');
var cors = require ('cors');
var path = require('path');
var app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
 
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../../index.html'));
});
 
app.get('/api', cors(corsOptions), function(req, res, next){
  res.json({msg: 'This is CORS-enabled for only example.com.'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});