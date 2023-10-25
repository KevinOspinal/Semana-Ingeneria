// Importación de módulos necesarios
const jwt = require('jsonwebtoken'); // Importa la librería 'jsonwebtoken'

// Importación de la clave secreta para firmar tokens desde 'config.js'
const TOKEN_SECRET = require('../config.js'); // RUTA DE CONFIG.JS (asegúrate de que la ruta sea correcta)

// Función para crear un token de acceso JWT con el payload proporcionado
const CreateAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        // Firma un token JWT utilizando el payload y la clave secreta
        jwt.sign(payload, TOKEN_SECRET, {
            expiresIn: '5d' // El token expirará en 5 días
        }, (error, token) => {
            if (error) {
                reject(error); // Si hay un error al firmar el token, rechaza la promesa
            } else {
                resolve(token); // Si se firma correctamente, resuelve la promesa con el token
            }
        });
    });
}

// Exporta la función para su uso en otros lugares del código
module.exports = CreateAccessToken;
