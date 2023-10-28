const conexion = require('../../../db'); // Conexión a la base de datos

// Función asincrónica para crear una facultad
const createFaculties = async (req, res) => {
    try {
        const nombre = req.body.nombre;

        // Realiza la inserción en la base de datos
        const result = await new Promise((resolve, reject) => {
            conexion.query('INSERT INTO tb_facultades (nombre_facultad) VALUES (?)', [nombre], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('La facultad se agregó con éxito');
        res.status(200).json({ message: 'La facultad se agregó con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar la facultad' });
    }
}

// Función asincrónica para obtener todas las facultades
const getFaculties = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todas las facultades
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_facultades', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Facultades impresas correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir las facultades' });
    }
}

// Función asincrónica para obtener una sola facultad por nombre
const getOnlyFaculties = async (req, res) => {
    const NombreFacultad = req.params.nombre;

    try {
        // Realiza una consulta para recuperar una facultad específica por nombre
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_facultades WHERE nombre_facultad = ?', [NombreFacultad], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Facultad consultada con éxito');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar la facultad' });
    }
}

// Función asincrónica para eliminar una facultad por su ID
const DeleteFaculties = async (req, res) => {
    const idFacultad = req.params.id;

    try {
        // Realiza una consulta para eliminar una facultad por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('DELETE FROM tb_facultades WHERE id_facultad = ?', [idFacultad], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Facultad eliminada con éxito');
        res.json({ message: 'Facultad eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la facultad' });
    }
}

// Función asincrónica para actualizar una facultad por su ID
const updateFaculties = async (req, res) => {
    const idFacultad = req.params.id;
    const { nombre } = req.body;

    try {
        // Realiza una consulta para actualizar una facultad por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('UPDATE tb_facultades SET nombre_facultad = ? WHERE id_facultad = ?', [nombre, idFacultad], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Facultad actualizada con éxito', result);
        res.status(200).json({ message: 'Facultad actualizada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la facultad' });
    }
}

module.exports = { createFaculties, getFaculties, DeleteFaculties, updateFaculties, getOnlyFaculties };
