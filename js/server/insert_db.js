var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dankul',
    password : 'Kbbsrvrx12',
    database : 'dankul'
});

connection.connect();

connection.query('INSERT INTO users (mail, pass) VALUES(\'gron005@i.ua\', \'kokloku\')');

connection.end();