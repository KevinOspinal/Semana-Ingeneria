const conexion = require('../../../db'); // Conexión a la base de datos

// Función asincrónica para crear un programa
const createOther_Events = async (req, res) => {

    const nombre_evento = req.body.nombre_evento;
    const TipoEvento = req.body.TipoEvento;
    const sede = req.body.sede;
    const cupo = req.body.cupo;
    const fecha = req.body.fecha;
    const hora = req.body.hora;
    const descripcion_otros_eventos = req.body.descripcion_otros_eventos;
    const estado_evento = req.body.estado_evento;

    try {
        // Realiza la inserción en la base de datos
        const result = await new Promise((resolve, reject) => {
            conexion.query('INSERT INTO tb_otros_eventos  (nombre_evento, id_tipo_evento, id_sede , cupo, fecha, hora, descripcion_otros_eventos, estado_evento ) VALUES (?,?,?,?,?,?,?,?)', 
            [nombre_evento, TipoEvento, sede, cupo, fecha, hora, descripcion_otros_eventos, estado_evento],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Otros Eventos agregados con éxito');
        res.status(200).json({ message: 'Otros Eventos se agregó con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar Otros Eventos' });
    }
}

// Función asincrónica para obtener todos los programas
const getOther_Events = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todos los programas junto con sus facultades
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM  tb_sedes s, tb_otros_eventos c, tb_tipos_eventos a WHERE  s.id_sede = c.id_sede AND a.id_tipo_evento = c.id_tipo_evento', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Otros Eventos impresos correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir Otros Eventos' });
    }
}

// Función asincrónica para obtener un programa por su nombre
const getOnlyOther_Events = async (req, res) => {
    const nombre_evento = req.params.nombre_evento;

    try {
        // Realiza una consulta para obtener un programa por su nombre junto con su facultad
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM  tb_sedes s, tb_otros_eventos c, tb_tipos_eventos a WHERE  s.id_sede = c.id_sede AND a.id_tipo_evento = c.id_tipo_evento AND nombre_evento = ?',
                [nombre_evento],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Programa consultado con éxito');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al consultar el programa' });
    }
}

// Función asincrónica para eliminar un programa por su ID
const deleteOther_Events = async (req, res) => {
    const idotros_Eventos = req.params.id;

    try {
        // Realiza una consulta para eliminar un programa por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query('DELETE FROM tb_otros_eventos WHERE id_otro_evento = ?', [idotros_Eventos], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        console.log('Programa eliminado con éxito');
        res.json({ message: 'Programa eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el programa' });
    }
}

// Función asincrónica para actualizar un programa por su ID
const updateOther_Events = async (req, res) => {
    const idotros_Eventos = req.params.id;
    const { nombre_evento, TipoEvento, sede, cupo, fecha, hora, descripcion_otros_eventos, estado_evento } = req.body;

    try {
        // Realiza una consulta para actualizar un programa por su ID
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'UPDATE tb_otros_eventos SET nombre_evento = ?, id_tipo_evento = ?,  id_sede = ?, cupo = ?, fecha = ?, hora = ?, descripcion_otros_eventos = ?, estado_evento = ? WHERE id_otro_evento = ?',
                [ nombre_evento, TipoEvento, sede, cupo, fecha, hora, descripcion_otros_eventos, estado_evento, idotros_Eventos],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Programa actualizado con éxito', result);
        res.status(200).json({ message: 'Programa actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el programa' });
    }
}

module.exports = { createOther_Events, getOther_Events, getOnlyOther_Events, deleteOther_Events, updateOther_Events };