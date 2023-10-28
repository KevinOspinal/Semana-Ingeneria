const conexion = require('../../../db'); // Conexión a la base de datos

// Función asincrónica para crear un tipo de usuario
const createUserType = async (req, res) => {
  const descripcion = req.body.descripcion;

  try {
    // Realiza la inserción en la base de datos
    const result = await new Promise((resolve, reject) => {
      conexion.query('INSERT INTO tb_tipos_usuarios (descripcion_tipo_usuario) VALUES (?)', [descripcion], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Tipo de usuario agregado con éxito');
    res.status(200).json({ message: 'El tipo de usuario se agregó con éxito' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al agregar el tipo de usuario' });
  }
};

// Función asincrónica para obtener todos los tipos de usuario
const getUserType = async (req, res) => {
  try {
    // Realiza una consulta para recuperar todos los tipos de usuario
    const result = await new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM tb_tipos_usuarios', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Tipos de usuarios impresos correctamente');
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al imprimir los tipos de usuarios' });
  }
};

// Función asincrónica para obtener un tipo de usuario por su descripción
const getOnlyUserType = async (req, res) => {
  const descripcionTipo = req.params.descripcion;

  try {
    // Realiza una consulta para obtener un tipo de usuario por su descripción
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'SELECT * FROM tb_tipos_usuarios WHERE descripcion_tipo_usuario = ?',
        [descripcionTipo],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log('Tipo de usuario consultado con éxito');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al consultar el tipo de usuario' });
  }
};

// Función asincrónica para eliminar un tipo de usuario por su ID
const deleteUserType = async (req, res) => {
  const idTipoUsuario = req.params.id;

  try {
    // Realiza una consulta para eliminar un tipo de usuario por su ID
    const result = await new Promise((resolve, reject) => {
      conexion.query('DELETE FROM tb_tipos_usuarios WHERE id_tipo_usuario = ?', [idTipoUsuario], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    console.log('Tipo de usuario eliminado con éxito');
    res.json({ message: 'Tipo de usuario eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el tipo de usuario' });
  }
};

// Función asincrónica para actualizar un tipo de usuario por su ID
const updateUserType = async (req, res) => {
  const idTipoUsuario = req.params.id;
  const { descripcion } = req.body;

  try {
    // Realiza una consulta para actualizar un tipo de usuario por su ID
    const result = await new Promise((resolve, reject) => {
      conexion.query(
        'UPDATE tb_tipos_usuarios SET descripcion_tipo_usuario = ? WHERE id_tipo_usuario = ?',
        [descripcion, idTipoUsuario],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    console.log('Tipo de usuario actualizado con éxito');
    res.status(200).json({ message: 'Tipo de usuario actualizado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el tipo de usuario' });
  }
};

module.exports = { createUserType, getUserType, getOnlyUserType, deleteUserType, updateUserType };
