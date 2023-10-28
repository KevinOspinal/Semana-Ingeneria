const conexion = require('../../../db'); // Conexión a la base de datos

const createEvent_Type = async (req, res) => {
  const descripcion = req.body.descripcion;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query('INSERT INTO tb_tipos_eventos (descripcion_otro_evento) VALUES (?)', [descripcion], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Tipo de evento se agregó con éxito');
    res.status(200).json({ message: 'El tipo de evento se agregó con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al agregar el tipo de evento' });
  }
};

const getEvent_Type = async (req, res) => {
  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM tb_tipos_eventos', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Tipo de evento mostrado con éxito');
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al imprimir el tipo de evento' });
  }
};

const getOnlyEvent_Type = async (req, res) => {
  const descripcion = req.params.descripcion_otro_evento;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM tb_tipos_eventos WHERE descripcion_otro_evento = ?', [descripcion], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Tipo de evento consultado con éxito');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al consultar el tipo de evento' });
  }
};

const deleteEvent_Type = async (req, res) => {
  const idTipoEvento = req.params.id;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query('DELETE FROM tb_tipos_eventos WHERE id_tipo_evento = ?', [idTipoEvento], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Tipo de evento eliminado con éxito');
    res.json({ message: 'Tipo de evento eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el tipo de evento' });
  }
};

const updateEvent_Type = async (req, res) => {
  const idTipoEvento = req.params.id;
  const { descripcion } = req.body;

  try {
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'UPDATE tb_tipos_eventos SET descripcion_otro_evento = ? WHERE id_tipo_evento = ?',
        [descripcion, idTipoEvento],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log('Tipo de evento actualizado con éxito', result);
    res.status(200).json({ message: 'Tipo de evento actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el tipo de evento' });
  }
};

module.exports = { createEvent_Type, getEvent_Type, deleteEvent_Type, updateEvent_Type, getOnlyEvent_Type };
