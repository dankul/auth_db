var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dankul',
    password : 'Kbbsrvrd12',
    database : 'dankul'
});

function Response(){
 var data = {};
 var query = function (data) {
  connection.connect();
        
  connection.query('SELECT * FROM users', function(error, results, fields){
	  
    if (error) throw error;
        
   for (var i in results) { 
	var userData = {};

    for(var k in results[i]){	
		userData[k] = results[i][k];
		
    };
	
	data[i] = userData;
   };
  });
     
  connection.end();
 };

 return {
  setData: function (data) {
   query(data);
  },
  get: function () {
   this.setData(data);
   
   return data;
  }
 };
};

var resp = new Response();

module.exports.resp = resp.get();