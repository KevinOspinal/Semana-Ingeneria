//Importación de módulos y funciones necesarios
const conexion = require('../../../db'); // Conexión a la base de datos
const bcrypt = require('bcryptjs'); // Módulo para el hash de contraseñas
const CreateAccessToken = require('../../libs/jwt.js'); // Función para crear tokens JWT

// Función para registrar un usuario
const Register = async (req, res) => {
    // Extracción de datos del cuerpo de la solicitud HTTP
    const { id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo} = req.body;
    
    console.log(id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo)
    try {
        // Hash de la contraseña del usuario (en este caso, se usa el número de documento)
        const passwordHash = await bcrypt.hash(documento, 5);

        // Realizar una consulta a la base de datos para insertar un nuevo usuario
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "INSERT INTO tb_usuarios (id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, contraseña, estado_usuario) VALUES (?,?,?,?,?,?,?,?,?)",
                [id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, passwordHash, "I"],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });

        // Creación de un token de acceso JWT para el usuario recién registrado
        const token = await CreateAccessToken({ id: result.insertId });

        // Establecer una cookie en la respuesta (esto podría usarse para autenticación posterior)
        res.cookie('token', token);
        // Responder con un código 200 y un mensaje
        res.status(200).json({ message: 'Usuario agregado con éxito', token });
        console.log(token)

    } catch (error) {
        // Manejo de errores en caso de falla
        console.log(error);
        res.status(500).json({ message: 'Error al agregar un usuario' });
    }
}

// Función para el inicio de sesión (aún no está implementada)
const Login = async (req, res) => {
    // Extracción de datos del cuerpo de la solicitud HTTP
    const { correo, password } = req.body;
    try {

        // Realizar una consulta a la base de datos para insertar un nuevo usuario
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "SELECT * FROM tb_usuarios WHERE correo = ?",
                [correo],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });


        if (result.length < 0) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const Usuario = {
            id: result[0].id_usuario,
            correo: result[0].correo,
            contraseña: result[0].contraseña
        }

        const isMach = await bcrypt.compare(password, Usuario.contraseña)

        if (!isMach) return res.status(400).json({ message: "Contraseña incorrecta" })


        // Creación de un token de acceso JWT para el usuario recién registrado
        const token = await CreateAccessToken({ id: Usuario.id });
        console.log(token)


        // Establecer una cookie en la respuesta (esto podría usarse para autenticación posterior)
        res.cookie('token', token);
        // Responder con un código 200 y un mensaje
        res.status(200).json({ message: 'Usuario iniciado con exito', token });

    } catch (error) {
        // Manejo de errores en caso de falla
        console.log(error);
        res.status(500).json({ message: 'Error al agregar un usuario' });
    }
}
const Logout = async (req, res) => {
    res.cookie('token', '', { expires: new Date(0) });

    return res.sendStatus(200)
}

const Profile = async (req, res) => {
    const UserId = req.user.id
    try {
        // Realizar una consulta a la base de datos para insertar un nuevo usuario
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "SELECT * FROM tb_usuarios WHERE id_usuario = ?",
                [UserId],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
        if (result.length < 0) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        return res.json({
            id: result[0].id_usuario,
            nombres: result[0].nombres_usuario,
            correo: result[0].correo,
            documento: result[0].documento
        })

    } catch (error) {
        // Manejo de errores en caso de falla
        console.log(error);
        res.status(500).json({ message: 'Error al agregar un usuario' });
    }

    res.send('profile')
}

// Exportar las funciones para su uso en otros lugares del código
module.exports = { Register, Login, Logout, Profile };
