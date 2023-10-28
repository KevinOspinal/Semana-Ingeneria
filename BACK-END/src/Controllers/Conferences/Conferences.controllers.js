const conexion = require('../../../db'); // Conexión a la base de datos

const createConferences = async (req, res) => {
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const sede = req.body.sede;
  const cupo = req.body.cupo;
  const fecha = req.body.fecha;
  const hora = req.body.hora;
  const estado = req.body.estado;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'INSERT INTO tb_conferencias (nombre_conferencia, descripcion_conferencia, id_sede, cupo, fecha_conferencia, hora_conferencia, estado_conferencia) VALUES (?,?,?,?,?,?,?)',
        [nombre, descripcion, sede, cupo, fecha, hora, estado],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log('Conferencia agregada con éxito');
    res.status(200).json({ message: 'La conferencia se agregó con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al agregar la conferencia' });
  }
};

const getConferences = async (req, res) => {
  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM tb_sedes s, tb_conferencias c WHERE s.id_sede = c.id_sede', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Conferencias impresas correctamente');
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al imprimir las conferencias' });
  }
};

const getOnlyConferences = async (req, res) => {
  const nombre = req.params.nombre;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'SELECT * FROM tb_sedes s, tb_conferencias c WHERE s.id_sede = c.id_sede AND nombre_conferencia = ?',
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

    console.log('Conferencia consultada con éxito');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al consultar la conferencia' });
  }
};

const deleteConferences = async (req, res) => {
  const idConferencia = req.params.id;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query('DELETE FROM tb_conferencias WHERE id_conferencia = ?', [idConferencia], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Conferencia eliminada con éxito');
    res.json({ message: 'Conferencia eliminada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la conferencia' });
  }
};

const updateConferences = async (req, res) => {
  const idConferencia = req.params.id;
  const { nombre, descripcion, sede, cupo, fecha, hora, estado } = req.body;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'UPDATE tb_conferencias SET nombre_conferencia = ? , descripcion_conferencia = ?,  id_sede = ?, cupo = ? , fecha_conferencia = ? , hora_conferencia = ? , estado_conferencia = ? WHERE id_conferencia = ?',
        [nombre, descripcion, sede, cupo, fecha, hora, estado, idConferencia],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log('Conferencia actualizada con éxito', result);
    res.status(200).json({ message: 'Conferencia actualizada con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la conferencia' });
  }
};

module.exports = { createConferences, getConferences, getOnlyConferences, deleteConferences, updateConferences };
