const conexion = require('../../db')

const createConferences = (req, res) => {
  const nombre = req.body.nombre
  const sede = undefined
  const fecha = req.body.fecha
  const hora = req.body.hora
  const estado = req.body.estado

  conexion.query('INSERT INTO tb_conferencias (descipcion, id_sede, fecha, hora, estado_conferencia) VALUES (?,?,?,?,?)', [nombre, sede, fecha, hora, estado ],
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

const getConferences = (req, res) => {
  conexion.query('SELECT * FROM tb_conferencias',
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json({ message: "Error al imprimir las conferencias" })
      } else {
        console.log("Conferencias Imprimidas Correctamente");
        res.json(result)
      }
    }
  )
}

const getOnlyConferences = (req, res) => {
  const nombre = req.params.nombre;
  conexion.query(
    'SELECT * FROM tb_conferencias WHERE descripcion = ?',
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
  const idConferencia = req.params.id;
  conexion.query(
    'DELETE FROM tb_conferencias WHERE id_conferencia = ?',
    [idConferencia],
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
  const idConferencia = req.params.id;
  const { nombre, sede, cupo, fecha, hora, estado  } = req.body;
  console.log(nombre, sede, cupo, fecha, hora, estado)

  conexion.query(
    'UPDATE tb_conferencias SET descripcion = ? , id_sede = ? , fecha = ? , hora = ? , estado_conferencia = ? WHERE id_conferencia = ?',
    [nombre, sede, cupo, fecha, hora, estado, idConferencia],
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