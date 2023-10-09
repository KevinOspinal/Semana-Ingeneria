const conexion = require('../../db')

const createConferences = (req, res) => {
  const nombre = req.body.nombre
  const sede = req.body.sede
  const cupo = req.body.cupo
  const fecha = req.body.fecha
  const hora = req.body.hora
  const estado = req.body.estado

  conexion.query('INSERT INTO tb_conferencias (descipcion, id_sede, cupo, fecha, hora, estado_conferencia) VALUES (?,?,?,?,?,?)', [nombre, sede, cupo, fecha, hora, estado ],
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
  conexion.query('SELECT  c.descipcion, s.nombre_sede, c.cupo, c.fecha , c.hora, c.estado_conferencia FROM  tb_sedes s, tb_conferencias c WHERE  s.id_sede = c.id_sede',
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
    'SELECT  c.descipcion, s.nombre_sede, c.cupo, c.fecha, c.hora FROM  tb_sedes s, tb_conferencias c WHERE  s.id_sede = c.id_sede AND descipcion = ?',
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
  const nombreConferences = req.params.id;
  const { nombre, sede, cupo, fecha, hora, estado  } = req.body;
  console.log(nombre, sede, cupo, fecha, hora, estado)

  conexion.query(
    'UPDATE tb_conferencias SET descipcion = ? , id_sede = ?, cupo = ? , fecha = ? , hora = ? , estado_conferencia = ? WHERE id_conferencia = ?',
    [nombre, sede, cupo, fecha, hora, estado, nombreConferences],
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