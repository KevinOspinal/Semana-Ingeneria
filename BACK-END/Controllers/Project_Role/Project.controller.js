const conexion = require('../../db');

// Función asincrónica para crear un rol de proyecto
const createProject_Role = async (req, res) => {
    const descripcion_rol_proyecto = req.body.descripcion_rol_proyecto;

    try {
        // Realiza la inserción en la base de datos
        const result = await new Promise((resolve, reject) => {
            conexion.query('INSERT INTO tb_roles_proyectos (descripcion_rol_proyecto) VALUES (?)', [descripcion_rol_proyecto], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Descripción de rol de proyecto agregada con éxito');
        res.status(200).json({ message: 'Rol de proyecto se agregó con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar el rol de proyecto' });
    }
}

// Función asincrónica para obtener todos los roles de proyecto
const getProject_Role = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todos los roles de proyecto
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_roles_proyectos', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Roles de proyecto impresos correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir los roles de proyecto' });
    }
}

// Función asincrónica para obtener un rol de proyecto por su descripción
const getOnlyProject_Role = async (req, res) => {
    const descripcion_rol_proyecto = req.params.descripcion_rol_proyecto;

    try {
        // Realiza una consulta para obtener un rol de proyecto por su descripción
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM tb_roles_proyectos WHERE descripcion_rol_proyecto = ?',
                [descripcion_rol_proyecto],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Rol de proyecto consultado con éxito');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar el rol de proyecto' });
    }
}

// Función asincrónica para eliminar un rol de proyecto por su ID
const deleteProject_Role = async (req, res) => {
    const idRolproyecto = req.params.id;

    try {
        // Realiza una consulta para eliminar un rol de proyecto por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('DELETE FROM tb_roles_proyectos WHERE id_rol_proyecto = ?', [idRolproyecto], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Rol de proyecto eliminado con éxito');
        res.json({ message: 'Rol de proyecto eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el rol de proyecto' });
    }
}

// Función asincrónica para actualizar un rol de proyecto por su ID
const updateProject_Role = async (req, res) => {
    const idRolProyecto = req.params.id;
    const { descripcion_rol_proyecto } = req.body;

    try {
        // Realiza una consulta para actualizar un rol de proyecto por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'UPDATE tb_roles_proyectos SET descripcion_rol_proyecto = ? WHERE id_rol_proyecto = ?',
                [descripcion_rol_proyecto, idRolProyecto],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Rol de proyecto actualizado con éxito', result);
        res.status(200).json({ message: 'Rol de proyecto actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el rol de proyecto' });
    }
}

module.exports = { createProject_Role, getProject_Role, deleteProject_Role, updateProject_Role, getOnlyProject_Role };
