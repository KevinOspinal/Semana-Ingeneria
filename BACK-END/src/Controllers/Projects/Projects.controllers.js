const conexion = require('../../../db'); // Conexión a la base de datos

// Función asincrónica para crear un proyecto
const createProjects = async (req, res) => {
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const tipoProyecto = req.body.tipoProyecto;

  try {
    // Realiza la inserción en la base de datos
    const result = await new Promise((resolve, reject) => {
      conexion.query('INSERT INTO tb_proyectos (nombre_proyecto, descripcion_proyecto, id_tipo_proyecto) VALUES (?,?,?)', [nombre, descripcion, tipoProyecto], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Proyecto agregado con éxito');
    res.status(200).json({ message: 'El proyecto se agregó con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al agregar el proyecto' });
  }
};

// Función asincrónica para obtener todos los proyectos
const getProjects = async (req, res) => {
  try {
    // Realiza una consulta para recuperar todos los proyectos
    const result = await new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM tb_tipos_proyectos t, tb_proyectos p WHERE t.id_tipo_proyecto = p.id_tipo_proyecto', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Proyectos impresos correctamente');
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al imprimir los proyectos' });
  }
};

// Función asincrónica para obtener un proyecto por su nombre
const getOnlyProjects = async (req, res) => {
  const nombre = req.params.nombre;

  try {
    // Realiza una consulta para obtener un proyecto por su nombre
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'SELECT * FROM tb_tipos_proyectos t, tb_proyectos p WHERE t.id_tipo_proyecto = p.id_tipo_proyecto AND p.nombre_proyecto = ?',
        [nombre],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log('Proyecto consultado con éxito');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al consultar el proyecto' });
  }
};

// Función asincrónica para eliminar un proyecto por su ID
const deleteProjects = async (req, res) => {
  const idProyecto = req.params.id;

  try {
    // Realiza una consulta para eliminar un proyecto por su ID
    const result = await new Promise((resolve, reject) => {
      conexion.query('DELETE FROM tb_proyectos WHERE id_proyecto = ?', [idProyecto], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Proyecto eliminado con éxito');
    res.json({ message: 'Proyecto eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el proyecto' });
  }
};

// Función asincrónica para actualizar un proyecto por su ID
const updateProjects = async (req, res) => {
  const idProyecto = req.params.id;
  const { nombre, descripcion, tipoProyecto } = req.body;

  try {
    // Realiza una consulta para actualizar un proyecto por su ID
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'UPDATE tb_proyectos SET nombre_proyecto = ?, descripcion_proyecto = ?, id_tipo_proyecto = ? WHERE id_proyecto = ?',
        [nombre, descripcion, tipoProyecto, idProyecto],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log('Proyecto actualizado con éxito');
    res.status(200).json({ message: 'Proyecto actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el proyecto' });
  }
};

module.exports = { createProjects, getProjects, getOnlyProjects, deleteProjects, updateProjects };
