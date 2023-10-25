const conexion = require('../../../db'); // Conexión a la base de datos

// Función asincrónica para crear un programa
const createPrograms = async (req, res) => {
    const nombre_programa = req.body.nombre_programa;
    const facultad = req.body.facultad;

    try {
        // Realiza la inserción en la base de datos
        const result = await new Promise((resolve, reject) => {
            conexion.query('INSERT INTO tb_programas (nombre_programa, id_facultad) VALUES (?,?)', [nombre_programa, facultad], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Programa agregado con éxito');
        res.status(200).json({ message: 'El programa se agregó con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar el programa' });
    }
}

// Función asincrónica para obtener todos los programas
const getPrograms = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todos los programas junto con sus facultades
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM  tb_facultades s, tb_programas c WHERE  s.id_facultad = c.id_facultad', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Programas impresos correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir los programas' });
    }
}

// Función asincrónica para obtener un programa por su nombre
const getOnlyPrograms = async (req, res) => {
    const nombre_programa = req.params.nombre_programa;

    try {
        // Realiza una consulta para obtener un programa por su nombre junto con su facultad
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM  tb_facultades s, tb_programas c WHERE  s.id_facultad = c.id_facultad AND nombre_programa = ?',
                [nombre_programa],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Programa consultado con éxito');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar el programa' });
    }
}

// Función asincrónica para eliminar un programa por su ID
const deletePrograms = async (req, res) => {
    const idProgramas = req.params.id;

    try {
        // Realiza una consulta para eliminar un programa por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('DELETE FROM tb_programas WHERE id_programa = ?', [idProgramas], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Programa eliminado con éxito');
        res.json({ message: 'Programa eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el programa' });
    }
}

// Función asincrónica para actualizar un programa por su ID
const updatePrograms = async (req, res) => {
    const idProgramas = req.params.id;
    const { nombre_programa, facultad } = req.body;

    try {
        // Realiza una consulta para actualizar un programa por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'UPDATE tb_programas SET nombre_programa = ? ,  id_facultad = ?  WHERE id_programa = ?',
                [nombre_programa, facultad, idProgramas],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Programa actualizado con éxito', result);
        res.status(200).json({ message: 'Programa actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el programa' });
    }
}

module.exports = { createPrograms, getPrograms, getOnlyPrograms, deletePrograms, updatePrograms };
