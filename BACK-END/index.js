const express = require('express')
const app = express();
const cors = require('cors')
const conexion = require('./db.js')
const createHeadquarters = require('./Controllers/Headquarters/Headquartes.controllers.js')
app.use(cors())
app.use(express.json())


app.post('/createHeadquarters', createHeadquarters)

app.get('/getHeadquarters', (req, res) => {
    conexion.query('SELECT * FROM tb_sedes',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Error al imprimir la sede' });
            } else {
                console.log('La mostro la sede con éxito');
                res.json(result); // Enviar el resultado como un objeto JSON
            }
        }
    )
})

app.delete('/deleteHeadquarters/:id', (req, res) => {
    const idSede = req.params.id;
    conexion.query(
        'DELETE FROM tb_sedes WHERE id_sede = ?',
        [idSede],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al eliminar la sede' });
            } else {
                console.log('Sede eliminada con éxito');
                res.json({ message: 'Sede eliminada con éxito' });
            }
        }
    );
});

app.put('/updateHeadquarters/:id', (req, res) => {
    const idSede = req.params.id;
    const { nombre, direccion, telefono } = req.body;
    console.log(nombre,direccion,telefono)

    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_sedes SET nombre_sede = ?, direccion = ?, telefono = ? WHERE id_sede = ?',
        [nombre, direccion, telefono, idSede],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al actualizar la sede' });
            } else {
                console.log('Sede actualizada con éxito', result);
                res.status(200).json({ message: 'Sede actualizada con éxito' });
            }
        }
    );
});


app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
