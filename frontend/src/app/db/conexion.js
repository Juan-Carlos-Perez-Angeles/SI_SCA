var mysql = require('mysql');

var connection= mysql.createConnection({
    host : 'localhost',
    database : 'sca',
    user : 'root',
    password : 'pcf120598',
    port : 3306
});

connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });
 //connection.end();