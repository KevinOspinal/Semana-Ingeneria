const conexion = require('../../db.js')

// Función asincrónica para crear un tipo de proyecto
const createProject_Type = async (req, res) => {
    const descripcion = req.body.descripcion;

    try {
        // Realiza la inserción en la base de datos
        const result = await new Promise((resolve, reject) => {
            conexion.query('INSERT INTO tb_tipos_proyectos (descripcion_tipo_proyecto) VALUES (?)', [descripcion], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Tipo de proyecto agregado con éxito');
        res.status(200).json({ message: 'El tipo de proyecto se agregó con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar el tipo de proyecto' });
    }
}

// Función asincrónica para obtener todos los tipos de proyectos
const getProject_Type = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todos los tipos de proyectos
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_tipos_proyectos', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Tipos de proyecto impresos correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir los tipos de proyecto' });
    }
}

// Función asincrónica para obtener un tipo de proyecto por su descripción
const getOnlyProject_Type = async (req, res) => {
    const descripcion = req.params.descripcion;

    try {
        // Realiza una consulta para obtener un tipo de proyecto por su descripción
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM tb_tipos_proyectos WHERE descripcion_tipo_proyecto = ?',
                [descripcion],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Tipo de proyecto consultado con éxito');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar el tipo de proyecto' });
    }
}

// Función asincrónica para eliminar un tipo de proyecto por su ID
const deleteProject_Type = async (req, res) => {
    const idProyectoType = req.params.id;

    try {
        // Realiza una consulta para eliminar un tipo de proyecto por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('DELETE FROM tb_tipos_proyectos WHERE id_tipo_proyecto = ?', [idProyectoType], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Tipo de proyecto eliminado con éxito');
        res.json({ message: 'Tipo de proyecto eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el tipo de proyecto' });
    }
}

// Función asincrónica para actualizar un tipo de proyecto por su ID
const updateProject_Type = async (req, res) => {
    const idTipoProyecto = req.params.id;
    const { descripcion } = req.body;

    try {
        // Realiza una consulta para actualizar un tipo de proyecto por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'UPDATE tb_tipos_proyectos SET descripcion_tipo_proyecto = ? WHERE id_tipo_proyecto = ?',
                [descripcion, idTipoProyecto],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Tipo de proyecto actualizado con éxito');
        res.status(200).json({ message: 'Tipo de proyecto actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el tipo de proyecto' });
    }
};

module.exports = { getProject_Type, createProject_Type, getOnlyProject_Type, deleteProject_Type, updateProject_Type };
