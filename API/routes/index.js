var express = require('express');
var router = express.Router();
const conexion = require('../config/conexion');

const port = (process.env.port || 3000);

/* GET home page. */
router.get('/index', function (req, res, next) {
    let sql = 'SELECT * FROM dispositivo'
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json(rows);
        }
    });
});

router.get('/index/:id', function (req, res, next) {
    const {id} = req.params;
    let sql = 'SELECT * FROM dispositivo WHERE id_equipo=?'
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json(rows);
        }
    });
});

router.post('/index', function (req, res, next) {
    const {
        marca, modelo, tipo_procesador, velocidad_procesador, memoria_ram, memoria_rom,
        tamano_pantalla, resolucionn, numero_camaras, resolucion_camaras,
        sistema_operativo
    } = req.body
    let sql = `INSERT INTO dispositivo
               VALUES (NULL, '${marca}', '${modelo}', '${tipo_procesador}', '${velocidad_procesador}', ${memoria_ram}, ${memoria_rom},
                       '${tamano_pantalla}', '${resolucionn}', ${numero_camaras}, '${resolucion_camaras}',
                       '${sistema_operativo}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({status: 'Equipo agregado'});
        }
    });
});

router.delete('/index/:id', function (req, res, next) {
    const {id} = req.params;
    let sql = `DELETE
               FROM dispositivo
               WHERE id_equipo = '${id}'`
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({status: 'Equipo eliminado'});
        }
    });
});

router.put('/index/:id', function (req, res, next) {
    const {id} = req.params;
    const {
        marca, modelo, tipo_procesador, velocidad_procesador, memoria_ram, memoria_rom,
        tamano_pantalla, resolucionn, numero_camaras, resolucion_camaras,
        sistema_operativo
    } = req.body;
    let sql = `UPDATE dispositivo
               SET marca='${marca}',
                   modelo='${modelo}',
                   tipo_procesador='${tipo_procesador}',
                   velocidad_procesador='${velocidad_procesador}',
                   memoria_ram=${memoria_ram},
                   memoria_rom=${memoria_rom},
                   tamano_pantalla='${tamano_pantalla}',
                   resolucionn='${resolucionn}',
                   numero_camaras=${numero_camaras},
                   resolucion_camaras='${resolucion_camaras}',
                   sistema_operativo='${sistema_operativo}'`
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({status: 'Equipo agregado'});
        }
    });
});

module.exports = router;
