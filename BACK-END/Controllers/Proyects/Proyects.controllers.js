const conexion = require('../../db')

const createProyects = (req, res) => {
  const nombre = req.body.nombre
  const descripcion = req.body.descripcion
  const tipo_proyecto = req.body.tipo_proyecto

  conexion.query('INSERT INTO tb_proyectos (nombre, descripcion, id_tipo_proyecto) VALUES (?,?,?)', [nombre, descripcion, tipo_proyecto],
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al agregar conferencia' })
      } else {
        console.log("Conferencia agregada con exito")
        res.status(200).json({ message: 'La conferencia se agrego con exito' })
      }
    }
  )
}

const getProyects = (req, res) => {
  conexion.query('SELECT p.id_proyecto ,p.nombre, p.descripcion , t.descripcion FROM  tb_tipos_proyectos t, tb_proyectos p WHERE  t.id_tipo_proyecto = p.id_tipo_proyecto',
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json({ message: "Error al imprimir el proyecto" })
      } else {
        console.log("Proyectos Imprimidos Correctamente");
        res.json(result)
      }
    }
  )
}

const getOnlyConferences = (req, res) => {
  const nombre = req.params.nombre;
  conexion.query(
    'SELECT p.nombre, p.descripcion , t.descripcion FROM  tb_tipos_proyectos t, tb_proyectos p WHERE  t.id_tipo_proyecto = p.id_tipo_proyecto AND p.nombre = ?',
    [nombre],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al consultar la conferencia' });
      } else {
        console.log('Conferencia consultada con éxito');
        res.json(result);
      }
    }
  );
}

const deleteConferences = (req, res) => {
  const nombreConferences = req.params.id;
  conexion.query(
    'DELETE FROM tb_conferencias WHERE descipcion = ?',
    [nombreConferences],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar la conferencia' });
      } else {
        console.log('Conferencia eliminada con éxito');
        res.json({ message: 'Conferencia eliminada con éxito' });
      }
    }
  );
}

const updateConferences = (req, res) => {
  const id_conferencia = req.params.id;

  const { nombre, sede, cupo, fecha, hora, estado } = req.body;
  console.log(nombre, sede, cupo, fecha, hora, estado)

  conexion.query(
    'UPDATE tb_conferencias SET descipcion = ? , id_sede = ?, cupo = ? , fecha = ? , hora = ? , estado_conferencia = ? WHERE id_conferencia = ?',
    [nombre, sede, cupo, fecha, hora, estado, id_conferencia],
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


module.exports = { createConferences, getConferences, getOnlyConferences, deleteConferences, updateConferences }