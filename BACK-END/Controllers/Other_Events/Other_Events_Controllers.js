const conexion = require('../../db.js')


//CONSULTAS PARA CREAR OTRO EVENTO
const createOtherEvent = (req, res) => {
const sede = req.body.sede
const tipo_evento = req.body.tipo_evento
const cupo = req.body.cupo
const fecha = req.body.fecha
const hora = req.body.hora

    conexion.query('INSERT INTO tb_otros_eventos (id_sede, id_tipo_evento, cupo, fecha, hora) VALUES (?,?,?,?,?)', [id_sede, id_tipo_evento, cupo, fecha, hora],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error al agregar la sede' });
            } else {
                console.log('La sede se agregó con éxito');
                res.status(200).json({ message: 'La sede se agregó con éxito' });
            }
        }
    )
}

//CONSULTAS PARA PODER MOSTRAR LOS EVENTOS
const getOtherEvent= (req, res) => {
    conexion.query('SELECT * FROM tb_otros_eventos',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Error al imprimir el evento' });
            } else {
                console.log('se mostro el evento con éxito');
                res.json(result); // Enviar el resultado como un objeto JSON
            }
        }
    )
}

//CONSULTAS PARA PODER ELIMINAR EVENTO
const deleteOtherEvent = (req, res) => {
    const idEvento = req.params.id;
    conexion.query(
        'DELETE FROM tb_otros_eventos WHERE id_otro_evento = ?',
        [idEvento],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al eliminar el evento' });
            } else {
                console.log('evento eliminado con éxito');
                res.json({ message: 'evento eliminado con éxito' });
            }
        }
    );
}

//CONSULTA PARA PODER ACTUALIZAR OTRO EVENTO
const updateOtherEvent = (req, res) => {
    const idEvento = req.params.id;
    const { id_sede, id_tipo_evento, cupo, fecha, hora } = req.body;
    console.log(id_sede, id_tipo_evento, cupo, fecha, hora)

    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_otros_eventos SET id_sede = ?, id_tipo_evento = ?, cupo = ?, fecha = ?, hora = ? WHERE id_otro_evento = ?',
        [id_sede, id_tipo_evento, cupo, fecha, hora, idEvento],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al actualizar la sede' });
            } else {
                console.log('Sede actualizada con éxito', result);
                res.status(200).json({ message: 'Sede actualizada con éxito' });
            }
        }
    );
};



module.exports = { createOtherEvent, getOtherEvent, deleteOtherEvent, updateOtherEvent};
