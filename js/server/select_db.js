var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dankul',
    password : 'Kbbsrvrx12',
    database : 'dankul'
});

connection.connect();

connection.query('SELECT * FROM users', function(error, results, fields, getResponse){
	var response = {};
	
	if (error) throw error;
	
	for (var i in results) {
		for(var k in results[i]){
			console.log(results[i][k]);
			response[k] = results[i][k];
		};		
	};	
	
	getResponse(response);
});

connection.end();

function getResponse(data){
	
	
	console.log(data);
	
	return data;
};


getResponse();