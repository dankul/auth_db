var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dankul',
    password : 'Kbbsrvrd12',
    database : 'dankul'
});

function Login(){
 var response = {
		isLogin: '', //todo: should contain true or false
		user: {} //todo: should contain user data from database
 };
 var query = function (respBody, callback) {
  //connection.connect();
        
  connection.query('SELECT * FROM users WHERE mail=\'' + respBody.mail + '\'', function(error, results, fields){
	  console.log(results[0]);
    if (error) throw error;
        
		
	callback(results[0]);
  });
     
  //connection.end();
 };

 return {
  get: function (respBody, callback) {
	query(respBody, callback);
  }
 };
};

module.exports = Login;