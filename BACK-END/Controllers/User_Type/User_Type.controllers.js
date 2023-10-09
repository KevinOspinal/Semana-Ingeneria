const conexion = require('../../db')

const createUserType = (req, res) => {
  const descripcion = req.body.descripcion

  conexion.query('INSERT INTO tb_tipos_usuarios (descripcion_tipo) VALUES (?)', [descripcion],
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al agregar el tipo de usuario' })
      } else {
        console.log("Tipo de Usuario agregado con exito")
        res.status(200).json({ message: 'El tipo de usuario se agrego con exito' })
      }
    }
  )
}

const getUserType = (req, res) => {
  conexion.query('SELECT * FROM tb_tipos_usuarios',
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json({ message: "Error al imprimir los tipos de usuarios" })
      } else {
        console.log("Tipos de Usuarios Imprimidos Correctamente");
        res.json(result)
      }
    }
  )
}

const getOnlyUserType = (req, res) => {
  const descripcionTipo = req.params.descripcion;
  conexion.query(
    'SELECT * FROM tb_tipos_usuarios WHERE descripcion_tipo = ?',
    [descripcionTipo],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al consultar tipo de usuario' });
      } else {
        console.log('Tipo de usuario consultada con éxito');
        res.json(result);
      }
    }
  );
}

const deleteUserType = (req, res) => {
  const idTipoUsuario = req.params.id;
  conexion.query(
    'DELETE FROM tb_tipos_usuarios WHERE id_tipo_usuario = ?',
    [idTipoUsuario],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar el tipo de usuario' });
      } else {
        console.log('Tipo de usuario eliminada con éxito');
        res.json({ message: 'Tipo de usuario eliminado con éxito' });
      }
    }
  );
}

const updateUserType = (req, res) => {
  const idTipoUsuario = req.params.id;
  const { descripcion } = req.body;
  console.log(descripcion)

  // Realiza la actualización en la base de datos usando el ID y los nuevos datos
  conexion.query(
    'UPDATE tb_tipos_usuarios SET descripcion_tipo = ? WHERE id_tipo_usuario = ?',
    [descripcion, idTipoUsuario],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar el tipo de usuario' });
      } else {
        console.log('Tipo de usuario actualizado con éxito', result);
        res.status(200).json({ message: 'Tipo de usuario actualizado con éxito' });
      }
    }
  );
};


module.exports = { createUserType, getUserType, getOnlyUserType, deleteUserType, updateUserType }