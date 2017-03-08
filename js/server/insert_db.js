function store (data){
	var mysql = require('mysql');
	var status = {
		insert: ''
	};
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'dankul',
		password : 'Kbbsrvrx12',
		database : 'dankul'
	});
	
	connection.connect();
	
	var userData = JSON.parse(data);
	
	connection.query('INSERT INTO users SET ?', userData, function(err, result) {
		if(result){
			  status.insert = result
		};
		if(err){
			  status.insert = err
		};
	});

	connection.end();
	
	return status; 
};

module.export.store = store(data);