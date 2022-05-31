const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'sca'
});

conexion.connect((err) => {
    if (err) {
        console.log('Error al establecer conexión con la base de datos: ' + err);
    } else {
        console.log('Conexión Exitosa');
    }
});

module.exports = conexion;