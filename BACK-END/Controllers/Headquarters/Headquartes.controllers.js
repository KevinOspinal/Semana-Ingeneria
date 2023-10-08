const conexion = require('../../db.js')


//CONSULTAS PARA PODER CREAR UNA SEDE
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

//CONSULTAS PARA PODER MOSTRAR LAS SEDES
const getHeadquarters = (req, res) => {
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
}

const getOnlyHeadquerters = (req, res) =>{
    const NombreSede = req.params.nombre;
    conexion.query(
        'SELECT * FROM tb_sedes WHERE nombre_sede = ?',
        [NombreSede],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al consultar la sede' });
            } else {
                console.log('Sede consultada con éxito');
                res.json(result);
            }
        }
    );
}

//CONSULTAS PARA PODER ELIMINAR LA SEDE
const DeleteHeadquarters = (req, res) => {
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
}

//CONSULTA PARA PODER ACTUALIZAR LA SEDE 
const updateHeadquarters = (req, res) => {
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
};

module.exports = { createHeadquarters, getHeadquarters,DeleteHeadquarters ,updateHeadquarters, getOnlyHeadquerters };
