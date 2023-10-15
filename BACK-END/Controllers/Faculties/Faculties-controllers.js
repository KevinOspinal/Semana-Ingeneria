const conexion = require('../../db.js')


//CONSULTAS PARA PODER CREAR UNA FACULTAD
const createFaculties = (req, res) => {
    const nombre = req.body.nombre

    conexion.query('INSERT INTO tb_facultades (nombre_facultad) VALUES (?)', [nombre],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error al agregar la facultad' });
            } else {
                console.log('La facultad se agregó con éxito');
                res.status(200).json({ message: 'La facultad se agregó con éxito' });
            }
        }
    )
}

//CONSULTAS PARA PODER MOSTRAR LAS FACULTADES
const getFaculties = (req, res) => {
    conexion.query('SELECT * FROM tb_facultades',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Error al imprimir la facultad' });
            } else {
                console.log('La mostro la facultad con éxito');
                res.json(result); // Enviar el resultado como un objeto JSON
            }
        }
    )
}

//CONSULTAS PARA PODER MOSTRAR UNA SOLA facultad
const getOnlyFaculties = (req, res) => {
    const NombreFacultad = req.params.nombre;
    conexion.query(
        'SELECT * FROM tb_facultades WHERE nombre_facultad = ?',
        [NombreFacultad],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al consultar la facultad' });
            } else {
                console.log('facultad consultada con éxito');
                res.json(result);
            }
        }
    );
}

//CONSULTAS PARA PODER ELIMINAR LA facultad
const DeleteFaculties = (req, res) => {
    const idFacultad = req.params.id;
    conexion.query(
        'DELETE FROM tb_facultades WHERE id_facultad = ?',
        [idFacultad],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al eliminar la facultad' });
            } else {
                console.log('Facultad eliminada con éxito');
                res.json({ message: 'Facultad eliminada con éxito' });
            }
        }
    );
}

//CONSULTA PARA PODER ACTUALIZAR LA facultad 
const updateFaculties = (req, res) => {
    const idFacultad = req.params.id;
    const { nombre} = req.body;
    
    console.log(nombre)

    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_facultades SET nombre_facultad = ? WHERE id_facultad = ?',
        [nombre, idFacultad],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al actualizar la facultad' });
            } else {
                console.log('Facultad actualizada con éxito', result);
                res.status(200).json({ message: 'Facultad actualizada con éxito' });
            }
        }
    );
};

module.exports = { createFaculties, getFaculties, DeleteFaculties, updateFaculties, getOnlyFaculties };

