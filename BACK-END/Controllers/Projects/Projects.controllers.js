const conexion = require('../../db')

const createProjects = (req, res) => {
  const nombre = req.body.nombre
  const descripcion = req.body.descripcion
  const tipoProyecto = req.body.tipoProyecto

  conexion.query('INSERT INTO tb_proyectos (nombre_proyecto, descripcion_proyecto, id_tipo_proyecto) VALUES (?,?,?)', [nombre, descripcion, tipoProyecto],
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al agregar proyecto' })
      } else {
        console.log("Proyecto agregada con exito")
        res.status(200).json({ message: 'El proyecto se agrego con exito' })
      }
    }
  )
}

const getProjects = (req, res) => {
  conexion.query('SELECT * FROM  tb_tipos_proyectos t, tb_proyectos p WHERE  t.id_tipo_proyecto = p.id_tipo_proyecto',
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

const getOnlyProjects = (req, res) => {
  const nombre = req.params.nombre;
  conexion.query(
    'SELECT * FROM  tb_tipos_proyectos t, tb_proyectos p WHERE  t.id_tipo_proyecto = p.id_tipo_proyecto AND p.nombre_proyecto = ?',
    [nombre],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al consultar el proyecto' });
      } else {
        console.log('Proyecto consultada con éxito');
        res.json(result);
      }
    }
  );
}

const deleteProjects = (req, res) => {
  const idProyecto = req.params.id;
  conexion.query(
    'DELETE FROM tb_proyectos WHERE id_proyecto = ?',
    [idProyecto],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar el proyecto' });
      } else {
        console.log('Proyecto eliminado con éxito');
        res.json({ message: 'Proyecto eliminado con éxito' });
      }
    }
  );
}

const updateProjects = (req, res) => {
  const idProyecto = req.params.id;

  const { nombre, descripcion, tipoProyecto } = req.body;
  console.log(nombre, descripcion, tipoProyecto)

  conexion.query(
    'UPDATE tb_proyectos SET nombre_proyecto = ?, descripcion_proyecto = ?, id_tipo_proyecto = ? WHERE id_proyecto = ?',
    [nombre, descripcion, tipoProyecto, idProyecto],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar el proyecto' });
      } else {
        console.log('Proyecto actualizado con éxito', result);
        res.status(200).json({ message: 'Proyecto actualizado con éxito' });
      }
    }
  );
};


module.exports = { createProjects, getProjects, getOnlyProjects, deleteProjects, updateProjects }