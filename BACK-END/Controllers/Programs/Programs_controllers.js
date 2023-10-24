const conexion = require('../../db')

const createPrograms = (req, res) => {

const nombre = req.body.nombre
const facultad = req.body.facultad

conexion.query('INSERT INTO tb_programas (nombre_programa, id_facultad) VALUES (?,?)', [nombre, facultad],
    (err, result) => {
    if (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al agregar el programa' })
    } else {
        console.log("Conferencia agregada con exito")
        res.status(200).json({ message: 'El programa se agrego con exito' })
    }
    }
)
}

const getPrograms = (req, res) => {
  conexion.query('SELECT * FROM  tb_facultades s, tb_programas c WHERE  s.id_facultad = c.id_facultad',
    (err, result) => {
    if (err) {
        console.log(err)
        res.status(500).json({ message: "Error al imprimir el Programa" })
    } else {
        console.log("Los Programas Imprimidos Correctamente");
        res.json(result)
    }
    }
)
}

const getOnlyPrograms = (req, res) => {
const nombre = req.params.nombre;
conexion.query(
    'SELECT * FROM  tb_facultades s, tb_programas c WHERE  s.id_facultad = c.id_facultad AND nombre_programa = ?',
    [nombre],
    (err, result) => {
    if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al consultar los Programas' });
    } else {
        console.log('Los Programas consultados con éxito');
        res.json(result);
    }
    }
);
}

const deletePrograms = (req, res) => {
const idProgramas = req.params.id;
conexion.query(
    'DELETE FROM tb_programas WHERE id_programa = ?',
    [idProgramas],
    (err, result) => {
    if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar los Programas' });
    } else {
        console.log('Los Programas son eliminados con éxito');
        res.json({ message: 'Programas eliminados con éxito' });
    }
    }
);
}

const updatePrograms = (req, res) => {
const idProgramas = req.params.id;

const { nombre, facultad } = req.body;
console.log(nombre, facultad)

conexion.query(
    'UPDATE tb_programas SET nombre_programa = ? ,  id_facultad = ?  WHERE id_programa = ?',
    [nombre, facultad, idProgramas],
    (err, result) => {
    if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar la conferencia' });
    } else {
        console.log('Conferencia actualizada con éxito', result);
        res.status(200).json({ message: 'Conferencia actualizada con éxito' });
    }
    }
);
};


module.exports = { createPrograms, getPrograms, getOnlyPrograms, deletePrograms, updatePrograms }