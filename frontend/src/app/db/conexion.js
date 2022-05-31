var mysql = require('mysql');

var connection= mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'sca',
    port : 3306
});

connection.connect(function(error){
    if(error){
      console.log(error);
    }else{
       console.log('Conexion correcta.');
    }
 });
 //connection.end();
