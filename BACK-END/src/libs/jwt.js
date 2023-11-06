// Importación de módulos necesarios
const jwt = require('jsonwebtoken'); // Importa la librería 'jsonwebtoken'

// Importación de la clave secreta para firmar tokens desde 'config.js'
const TOKEN_SECRET = require('../../config.js'); // RUTA DE CONFIG.JS (asegúrate de que la ruta sea correcta)

// Función para crear un token de acceso JWT con el payload proporcionado
// En jwt.js
const CreateAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        // Asegúrate de incluir el 'id' en el payload
        jwt.sign(payload, TOKEN_SECRET, {
            expiresIn: '1d' // El token expirará en 1 día
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
