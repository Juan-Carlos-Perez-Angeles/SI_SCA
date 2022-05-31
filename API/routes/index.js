var express = require('express');
var router = express.Router();
const conexion = require('../config/conexion');

const port = (process.env.port || 3000);

/* GET home page. */
router.get('/index', function (req, res, next) {
    let sql = 'SELECT * FROM auto'
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json(rows);
        }
    });
});

router.get('/index/:id', function (req, res, next) {
    const { id } = req.params;
    let sql = 'SELECT * FROM auto WHERE id_auto=?'
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
        id_auto, marca, modelo, anno, motor, color, rine, img, precio, segmento
    } = req.body
    let sql = `INSERT INTO auto
               VALUES (NULL,'${marca}', '${modelo}', ${anno}, '${motor}', '${color}', '${rine}',
                       '${img}', '${precio}', '${segmento}')`
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({ status: 'Automovil Agregado' });
        }
    });
});

router.delete('/index/:id', function (req, res, next) {
    const { id } = req.params;
    let sql = `DELETE
               FROM auto
               WHERE id_auto = '${id}'`
    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({ status: 'Automovil Eliminado' });
        }
    });
});

router.put('/index/:id', function (req, res, next) {
    const { id } = req.params;
    const {
        marca, modelo, anno, motor, color, rine,
        img, precio, segmento
    } = req.body;
    let sql = `UPDATE auto
               SET marca='${marca}',
                   modelo='${modelo}',
                   anno=${anno},
                   motor='${motor}',
                   color='${color}',
                   rine='${rine}',
                   img='${img}',
                   precio='${precio}',
                   segmento='${segmento}' WHERE id_auto= '${id}'`
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({status: 'Automovil Modificado'});
        }
    });
});

module.exports = router;
