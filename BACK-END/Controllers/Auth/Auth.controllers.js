const conexion = require('../../db')

const Register = async (req, res) => {
    const { id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, estado_usuario } = req.body;
    console.log(id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, estado_usuario)

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "INSERT INTO tb_usuarios (id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, estado_usuario) VALUES (?,?,?,?,?,?,?,?)",
                [id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, estado_usuario],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });

        console.log('Usuario agregado con éxito');
        res.status(200).json({ message: 'Usuario agregado con éxito', result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar un usuario' });
    }
}

const Login = (req, res) => {
    res.send('LOGIADO');
}

module.exports = { Register, Login }
