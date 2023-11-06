const conexion = require('../../../db'); // Conexión a la base de datos

// Función asincrónica para crear una sede
const createHeadquarters = async (req, res) => {
    try {
        const nombre = req.body.nombre;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;

        // Realiza la inserción en la base de datos
        const result = await new Promise((resolve, reject) => {
            conexion.query('INSERT INTO tb_sedes (nombre_sede, direccion, telefono) VALUES (?, ?, ?)', [nombre, direccion, telefono], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('La sede se agregó con éxito');
        res.status(200).json({ message: 'La sede se agregó con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar la sede' });
    }
}

// Función asincrónica para obtener todas las sedes
const getHeadquarters = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todas las sedes
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_sedes', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Sedes impresas correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir las sedes' });
    }
}

// Función asincrónica para obtener una sola sede por nombre
const getOnlyHeadquerters = async (req, res) => {
    const NombreSede = req.params.nombre;

    try {
        // Realiza una consulta para recuperar una sede específica por nombre
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_sedes WHERE nombre_sede = ?', [NombreSede], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Sede consultada con éxito');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar la sede' });
    }
}

// Función asincrónica para eliminar una sede por su ID
const DeleteHeadquarters = async (req, res) => {
    const idSede = req.params.id;

    try {
        // Realiza una consulta para eliminar una sede por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('DELETE FROM tb_sedes WHERE id_sede = ?', [idSede], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Sede eliminada con éxito');
        res.json({ message: 'Sede eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar la sede' });
    }
}

// Función asincrónica para actualizar una sede por su ID
const updateHeadquarters = async (req, res) => {
    const idSede = req.params.id;
    const { nombre, direccion, telefono } = req.body;

    try {
        // Realiza una consulta para actualizar una sede por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('UPDATE tb_sedes SET nombre_sede = ?, direccion = ?, telefono = ? WHERE id_sede = ?', [nombre, direccion, telefono, idSede], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Sede actualizada con éxito', result);
        res.status(200).json({ message: 'Sede actualizada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar la sede' });
    }
}

module.exports = { createHeadquarters, getHeadquarters, DeleteHeadquarters, updateHeadquarters, getOnlyHeadquerters };
