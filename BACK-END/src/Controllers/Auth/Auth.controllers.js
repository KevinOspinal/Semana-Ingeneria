// Importación de módulos y funciones necesarios
const conexion = require('../../../db'); // Conexión a la base de datos
const bcrypt = require('bcryptjs'); // Módulo para el hash de contraseñas
const CreateAccessToken = require('../../libs/jwt.js'); // Función para crear tokens JWT
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = require('../../../config');
// Función para registrar un usuario
const Register = async (req, res) => {
    // Extracción de datos del cuerpo de la solicitud HTTP
    const { id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo } = req.body;
    try {

        console.log(documento.length)
        if(documento.length>12) {
            return res.status(400).json(["El documento debe que tener maximo 12 digitos"])
        } 

        // Realizar una consulta a la base de datos para verificar si el correo ya está en uso
        const UserFound = await new Promise((resolve, reject) => {
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

        if (UserFound.length > 0) {
            return res.status(400).json(["Este correo ya esta en uso"])
        }

        // Realizar una consulta a la base de datos para insertar un nuevo usuario
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "INSERT INTO tb_usuarios (id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo) VALUES (?,?,?,?,?,?,?)",
                [
                    id_tipo_documento,
                    documento,
                    id_tipo_usuario,
                    id_programa,
                    nombres_usuario,
                    apellidos_usuario,
                    correo,
                ],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });

        // Obtén los datos del usuario desde la base de datos
        const userData = {
            id_tipo_documento,
            documento,
            id_tipo_usuario,
            id_programa,
            nombres_usuario,
            apellidos_usuario,
            correo,
            id: result.insertId, // ID generado en la base de datos
        };

        // Creación de un token de acceso JWT para el usuario recién registrado
        const token = await CreateAccessToken({ id: result.insertId });

        // Establecer una cookie en la respuesta (esto podría usarse para autenticación posterior)
        //res.cookie("token", token);
        // Responder con un código 200 y un mensaje
        res.json(userData);
        
    } catch (error) {
        // Manejo de errores en caso de falla
        console.error(error);
        res
            .status(500)
            .json({ message: "Error al agregar un usuario", error: error.message });
    }
};

// Función para el inicio de sesión (aún no está implementada)
const Login = async (req, res) => {
    // Extracción de datos del cuerpo de la solicitud HTTP
    const { documento } = req.body;
    try {
        if (documento.length > 13)
            return res
                .status(400)
                .json(["El documento debe que tener maximo 12 digitos"]);
        // Realizar una consulta a la base de datos para buscar un usuario por documento
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "SELECT * FROM tb_usuarios WHERE documento = ?",
                [documento],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
        // Verificar si se encontró un usuario
        if (!result.length) {
            return res
                .status(400)
                .json(["Usuario no encontrado"]);
        }

        const Usuario = {
            id: result[0].id_usuario,
            id_tipo_usuario: result[0].id_tipo_usuario,
            nombres: result[0].nombres_usuario,
            apellidos_usuario: result[0].apellidos_usuario,
            documento: result[0].documento
        };

        // Creación de un token de acceso JWT para el usuario autenticado
        const token = await CreateAccessToken({ id: Usuario.id });

        // Establecer una cookie en la respuesta (esto podría usarse para autenticación posterior)
        res.cookie("token", token);
        // Responder con un código 200 y un mensaje de éxito
        res.json(Usuario);
    } catch (error) {
        // Manejo de errores en caso de falla
        console.log(error);
        res.status(500).json(["Error al iniciar el usuario"]);
    }
};

// Función para cerrar sesión
const Logout = async (req, res) => {
    // Borra la cookie que contiene el token de acceso
    res.cookie("token", "", { expires: new Date(0) });
    // Responde con un código de respuesta 200
    return res.sendStatus(200);
};

// Función para obtener el perfil de un usuario
const Profile = async (req, res) => {
    // Obtiene el ID de usuario del objeto req.user (asumiendo que el usuario ha iniciado sesión previamente)
    const UserId = req.user.id;
    try {
        // Realizar una consulta a la base de datos para obtener los detalles del usuario por su ID
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
        // Verificar si se encontró un usuario
        if (result.length < 1) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }
        // Responder con los datos del perfil del usuario en un objeto JSON
        return res.json({
            id: result[0].id_usuario,
            nombres: result[0].nombres_usuario,
            correo: result[0].correo,
            documento: result[0].documento,
        });
    } catch (error) {
        // Manejo de errores en caso de falla
        console.log(error);
        res.status(500).json({ message: "Error al agregar un usuario" });
    }
    res.send("profile");
};

const verityToken = async (req, res) => {
    const {token} = req.cookies

    if(!token) return res.status(401).json(['No autorizado'])
    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json(['No autorizado'])

        const decode = jwt.verify(token, TOKEN_SECRET)

        const tokenId = decode.id

        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "SELECT * FROM tb_usuarios WHERE id_usuario = ?",
                [tokenId],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });
        if (!result.length) return res.status(401).json(['No autorizado'])

        res.json({
            id: result[0].id_usuario,
            id_tipo_usuario: result[0].id_tipo_usuario,
            nombres: result[0].nombres_usuario,
            apellidos: result[0].apellidos_usuario,
            correo: result[0].correo,
        })
    })
}

// Exportar las funciones para su uso en otros lugares del código
module.exports = { Register, Login, Logout, Profile, verityToken };
