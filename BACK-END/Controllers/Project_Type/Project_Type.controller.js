const conexion = require('../../db.js')

const createProject_Type = (req, res) => {
    const nombre = req.body.nombre

    conexion.query('INSERT INTO tb_tipos_proyectos (descripcion) VALUES (?)', [nombre],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error al agregar el tipo de proyecto' });
            } else {
                console.log('La tipo usuario se agregó con éxito');
                res.status(200).json({ message: 'El proyecto se agregó con éxito' });
            }
        }
    )
}

const getProyect_Type = (req,res)=>{
    conexion.query('SELECT * FROM tb_tipos_proyectos',(err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Error al imprimir Rol proyecto' });
        } else {
            console.log('Typo proyecto imprimido con éxito');
            res.json(result); // Enviar el resultado como un objeto JSON
        }
    })
}

const getOnlyProtect_Type = (req, res) => {
    const NombreTipoProyecto = req.params.descripcion;
    console.log(NombreTipoProyecto)
    conexion.query('SELECT * FROM tb_tipos_proyectos WHERE descripcion = ?',[NombreTipoProyecto],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al consultar el tipo proyecto' });
            } else {
                console.log('Tipo proyecto consultado con éxito');
                res.json(result);
            }
        }
    );
}

//CONSULTAS PARA PODER ELIMINAR LA SEDE
const DeleteProyect_Type = (req, res) => {

    const idProyectoType = req.params.id;

    conexion.query('DELETE FROM tb_tipos_proyectos WHERE id_tipo_proyecto = ?',[idProyectoType],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al eliminar la tipo proyecto' });
            } else {
                console.log('tipo proyecto  eliminada con éxito');
                res.json({ message: 'tipo proyecto eliminado con éxito' });
            }
        }
    );
}

//CONSULTA PARA PODER ACTUALIZAR LA SEDE 
const updateProyect_Type = (req, res) => {
    const idTipoProyecto = req.params.id;
    const { descripcion } = req.body;
    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_tipos_proyectos SET descripcion = ? WHERE id_tipo_proyecto = ?',
        [descripcion, idTipoProyecto],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al actualizar la tipos proyectos' });
            } else {
                console.log('Tipos de proyectos actualizado con éxito', result);
                res.status(200).json({ message: 'tipos proyectos actualizados con éxito' });
            }
        }
    );
};


module.exports = {getProyect_Type,createProject_Type,getOnlyProtect_Type,DeleteProyect_Type,updateProyect_Type}