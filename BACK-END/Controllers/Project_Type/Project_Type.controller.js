const conexion = require('../../db.js')

const createProject_Type = (req, res) => {
    const descripcion = req.body.descripcion

    conexion.query('INSERT INTO tb_tipos_proyectos (descripcion_tipo_proyecto) VALUES (?)', [descripcion],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error al agregar el tipo de proyecto' });
            } else {
                console.log('El tipo de proyecto se agregó con éxito');
                res.status(200).json({ message: 'El tipo de proyecto se agregó con éxito' });
            }
        }
    )
}

const getProject_Type = (req,res)=>{
    conexion.query('SELECT * FROM tb_tipos_proyectos',(err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Error al imprimir los tipos de proyecto' });
        } else {
            console.log('Tipos de proyecto imprimido con éxito');
            res.json(result); // Enviar el resultado como un objeto JSON
        }
    })
}

const getOnlyProject_Type = (req, res) => {
    const descripcion = req.params.descripcion;
    console.log(NombreTipoProyecto)
    conexion.query('SELECT * FROM tb_tipos_proyectos WHERE descripcion_tipo_proyecto = ?',[descripcion],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al consultar el tipo de proyecto' });
            } else {
                console.log('Tipo de proyecto consultado con éxito');
                res.json(result);
            }
        }
    );
}

//CONSULTAS PARA PODER ELIMINAR TIPO PROYECTO
const deleteProject_Type = (req, res) => {

    const idProyectoType = req.params.id;

    conexion.query('DELETE FROM tb_tipos_proyectos WHERE id_tipo_proyecto = ?',[idProyectoType],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al eliminar la tipo de proyecto' });
            } else {
                console.log('Tipo de proyecto  eliminada con éxito');
                res.json({ message: 'Tipo de proyecto eliminado con éxito' });
            }
        }
    );
}

//CONSULTA PARA PODER ACTUALIZAR TIPO PROYECTO
const updateProject_Type = (req, res) => {
    const idTipoProyecto = req.params.id;
    const { descripcion } = req.body;
    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_tipos_proyectos SET descripcion = ? WHERE id_tipo_proyecto = ?',
        [descripcion, idTipoProyecto],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al actualizar el tipo de proyecto' });
            } else {
                console.log('Tipo de proyecto actualizado con éxito');
                res.status(200).json({ message: 'Tipo de proyecto actualizado con éxito' });
            }
        }
    );
};


module.exports = {getProject_Type,createProject_Type,getOnlyProject_Type,deleteProject_Type,updateProject_Type}