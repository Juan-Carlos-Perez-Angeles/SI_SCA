const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'ADMIN',
    password: 'admin',
    port: 3306,
    database: 'db_smartphones'
});

conexion.connect((err) => {
    if (err) {
        console.log('Error al establecer conexión con la base de datos: ' + err);
    } else {
        console.log('Conexión Exitosa');
    }
});

module.exports = conexion;