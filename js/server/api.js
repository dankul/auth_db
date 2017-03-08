var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require ('cors'),
	path = require('path'),
	app = express();



var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
 
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../../index.html'));
});
 
app.get('/api', cors(corsOptions), function(req, res, next){
  var select_db = require('./select_db');
  
  res.json(select_db.resp);
});

app.put('/insert', cors(corsOptions), function(req, res, next){
	var insert_db = require('./insert_db');

	res.json(insert_db.store(req.body));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});