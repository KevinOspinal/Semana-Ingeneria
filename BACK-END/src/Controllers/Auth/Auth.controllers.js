// Importación de módulos y funciones necesarios
const conexion = require('../../../db'); // Conexión a la base de datos
const bcrypt = require('bcryptjs'); // Módulo para el hash de contraseñas
const CreateAccessToken = require('../../libs/jwt.js'); // Función para crear tokens JWT

// Función para registrar un usuario
const Register = async (req, res) => {
    // Extracción de datos del cuerpo de la solicitud HTTP
    const { id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo } = req.body;

    // Hasheo de la contraseña del usuario (usando el número de documento como contraseña)
    const passwordHash = await bcrypt.hash(documento, 5);

    try {
        // Realizar una consulta a la base de datos para insertar un nuevo usuario
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "INSERT INTO tb_usuarios (id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, contraseña) VALUES (?,?,?,?,?,?,?,?)",
                [id_tipo_documento, documento, id_tipo_usuario, id_programa, nombres_usuario, apellidos_usuario, correo, passwordHash],
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
            id: result.insertId // ID generado en la base de datos
        };

        // Creación de un token de acceso JWT para el usuario recién registrado
        const token = await CreateAccessToken({ id: result.insertId });

        // Establecer una cookie en la respuesta (esto podría usarse para autenticación posterior)
        res.cookie('token', token);
        // Responder con un código 200 y un mensaje
        res.json({
            id: userData.id,
            id_tipo_documento: userData.id_tipo_documento,
            documento: userData.documento,
            id_tipo_usuario: userData.id_tipo_usuario,
            id_programa: userData.id_programa,
            nombres_usuario: userData.nombres_usuario,
            apellidos_usuario: userData.apellidos_usuario,
            correo: userData.correo,
        });
    } catch (error) {
        // Manejo de errores en caso de falla
        console.error(error);
        res.status(500).json({ message: 'Error al agregar un usuario', error: error.message });
    }
}

// Función para el inicio de sesión (aún no está implementada)
const Login = async (req, res) => {
    // Extracción de datos del cuerpo de la solicitud HTTP
    const { Documento } = req.body;
    try {
        // Realizar una consulta a la base de datos para buscar un usuario por documento
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "SELECT * FROM tb_usuarios WHERE documento = ?",
                [Documento],
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

        const Usuario = {
            id: result[0].id_usuario,
            contraseña: result[0].contraseña
        }

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const isMatch = await bcrypt.compare(Documento, Usuario.contraseña);

        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

        // Creación de un token de acceso JWT para el usuario autenticado
        const token = await CreateAccessToken({ id: Usuario.id });

        // Establecer una cookie en la respuesta (esto podría usarse para autenticación posterior)
        res.cookie('token', token);
        // Responder con un código 200 y un mensaje de éxito
        res.status(200).json({ message: 'Usuario iniciado con éxito', token });
    } catch (error) {
        // Manejo de errores en caso de falla
        console.log(error);
        res.status(500).json({ message: 'Error al iniciar el usuario' });
    }
}

// Función para cerrar sesión
const Logout = async (req, res) => {
    // Borra la cookie que contiene el token de acceso
    res.cookie('token', '', { expires: new Date(0) });
    // Responde con un código de respuesta 200
    return res.sendStatus(200);
}

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
            documento: result[0].documento
        });
    } catch (error) {
        // Manejo de errores en caso de falla
        console.log(error);
        res.status(500).json({ message: 'Error al agregar un usuario' });
    }
    res.send('profile');
}

// Exportar las funciones para su uso en otros lugares del código
module.exports = { Register, Login, Logout, Profile };
