const conexion = require('../../../db'); // Conexión a la base de datos

// Función asincrónica para crear otro evento
const createOtherEvent = async (req, res) => {
    try {
        const id_sede = req.body.id_sede;
        const id_tipo_evento = req.body.id_tipo_evento;
        const cupo = req.body.cupo;
        const fecha = req.body.fecha;
        const hora = req.body.hora;

        // Realiza la inserción en la base de datos
        const result = await new Promise((resolve, reject) => {
            conexion.query('INSERT INTO tb_otros_eventos (id_sede, id_tipo_evento, cupo, fecha, hora) VALUES (?,?,?,?,?)', [id_sede, id_tipo_evento, cupo, fecha, hora], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('El evento se agregó con éxito');
        res.status(200).json({ message: 'El evento se agregó con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar el evento' });
    }
}

// Función asincrónica para obtener todos los eventos
const getOtherEvent = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todos los eventos
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_otros_eventos', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Eventos impresos correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir los eventos' });
    }
}

// Función asincrónica para eliminar un evento por su ID
const deleteOtherEvent = async (req, res) => {
    const idEvento = req.params.id;

    try {
        // Realiza una consulta para eliminar un evento por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('DELETE FROM tb_otros_eventos WHERE id_otro_evento = ?', [idEvento], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Evento eliminado con éxito');
        res.json({ message: 'Evento eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el evento' });
    }
}

// Función asincrónica para actualizar un evento por su ID
const updateOtherEvent = async (req, res) => {
    const idEvento = req.params.id;
    const { id_sede, id_tipo_evento, cupo, fecha, hora } = req.body;

    try {
        // Realiza una consulta para actualizar un evento por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('UPDATE tb_otros_eventos SET id_sede = ?, id_tipo_evento = ?, cupo = ?, fecha = ?, hora = ? WHERE id_otro_evento = ?', [id_sede, id_tipo_evento, cupo, fecha, hora, idEvento], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Evento actualizado con éxito', result);
        res.status(200).json({ message: 'Evento actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el evento' });
    }
};

module.exports = { createOtherEvent, getOtherEvent, deleteOtherEvent, updateOtherEvent };
