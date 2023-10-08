const conexion = require('../../db.js')

const createHeadquarters = (req, res) => {
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono

    conexion.query('INSERT INTO tb_sedes (nombre_sede, direccion, telefono) VALUES (?, ?, ?)', [nombre, direccion, telefono],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error al agregar la sede' });
            } else {
                console.log('La sede se agregó con éxito');
                res.status(200).json({ message: 'La sede se agregó con éxito' });
            }
        }
    )
}


module.exports = createHeadquarters;