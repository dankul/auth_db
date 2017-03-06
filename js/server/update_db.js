var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dankul',
    password : 'Kbbsrvrx12',
    database : 'dankul'
});

connection.connect();

connection.query('UPDATE users SET mail=\'tron001@i.ua\'');

connection.end();