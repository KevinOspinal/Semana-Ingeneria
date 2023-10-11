const conexion = require('../../db.js')

const createProject_Role = (req, res) => {
    const descripcion = req.body.descripcion

    conexion.query('INSERT INTO tb_roles_proyectos (descripcion) VALUES (?)', [descripcion],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error al agregar la descripcion' });
            } else {
                console.log('La descripcion se agregó con éxito');
                res.status(200).json({ message: 'La descripcion se agregó con éxito' });
            }
        }
    )
}

const getProject_Role = (req, res) => {
    conexion.query('SELECT * FROM tb_roles_proyectos',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Error al imprimir la descripcion' });
            } else {
                console.log('mostro la descripcion con éxito');
                res.json(result); // Enviar el resultado como un objeto JSON
            }
        }
    )
}

const getOnlyProject_Role = (req, res) => {
    const Nombredescripcion = req.params.descripcion;
    conexion.query(
        'SELECT * FROM tb_roles_proyectos WHERE descripcion = ?',
        [Nombredescripcion],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al consultar la descripcion' });
            } else {
                console.log('Descripcion consultada con éxito');
                res.json(result);
            }
        }
    );
}

//CONSULTAS PARA PODER ELIMINAR LA DESCRIPCION
const deleteProject_Role = (req, res) => {
    const idRolproyecto = req.params.id;
    conexion.query(
        'DELETE FROM tb_roles_proyectos WHERE id_rol_proyecto = ?',
        [idRolproyecto],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'error al eliminar la descripcion' });
            } else {
                console.log('Descripcion eliminada con éxito');
                res.json({ message: 'Descripcion eliminada con éxito' });
            }
        }
    );
}

//CONSULTA PARA PODER ACTUALIZAR LA DESCRIPCION
const updateProject_Role = (req, res) => {
    const idrol_proyecto = req.params.id;
    const { descripcion } = req.body;
    console.log(descripcion)

    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_roles_proyectos SET descripcion = ? WHERE id_rol_proyecto = ?',
        [descripcion,idrol_proyecto],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al actualizar la descripcion' });
            } else {
                console.log('Descripcion actualizada con éxito', result);
                res.status(200).json({ message: 'descripcion actualizada con éxito' });
            }
        }
    );
};

module.exports = { createProject_Role, getProject_Role, deleteProject_Role, updateProject_Role, getOnlyProject_Role };