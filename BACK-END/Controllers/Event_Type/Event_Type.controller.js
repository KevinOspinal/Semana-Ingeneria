const conexion = require('../../db.js')


//CONSULTAS PARA PODER CREAR UNA FACULTAD
const createEvent_Type = (req, res) => {
    const descripcion = req.body.descripcion

    conexion.query('INSERT INTO tb_tipos_eventos (descripcion_otro_evento) VALUES (?)', [descripcion],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Error al agregar lel tipo de evento' });
            } else {
                console.log('Lel tipo de evento se agregó con éxito');
                res.status(200).json({ message: 'El tipo de evento se agregó con éxito' });
            }
        }
    )
}

//CONSULTAS PARA PODER MOSTRAR LOS TIPOS DE EVENTOS
const getEvent_Type = (req, res) => {
    conexion.query('SELECT * FROM tb_tipos_eventos',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Error al imprimir el tipo de evento' });
            } else {
                console.log('Se mostro el tipo de evento con éxito');
                res.json(result); // Enviar el resultado como un objeto JSON
            }
        }
    )
}

//CONSULTAS PARA PODER MOSTRAR UNA SOLA facultad
const getOnlyEvent_Type = (req, res) => {
    const DescripcionEvent_Type = req.params.descripcion_otro_evento;
    conexion.query(
        'SELECT * FROM tb_tipos_eventos WHERE descripcion_otro_evento = ?',
        [DescripcionEvent_Type],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al consultar el tipo de evento' });
            } else {
                console.log('Tipo de evento consultado con éxito');
                res.json(result);
            }
        }
    );
}

//CONSULTAS PARA PODER ELIMINAR LA facultad
const deleteEvent_Type = (req, res) => {
    const idTipoEvento = req.params.id;
    conexion.query(
        'DELETE FROM tb_tipos_eventos WHERE id_tipo_evento = ?',
        [idTipoEvento],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al eliminar el tipo de evento' });
            } else {
                console.log('Tipo de evento eliminado con éxito');
                res.json({ message: 'Tipo de evento eliminado con éxito' });
            }
        }
    );
}

//CONSULTA PARA PODER ACTUALIZAR LA facultad 
const updateEvent_Type = (req, res) => {
    const idTipoEvento = req.params.id;
    const {descripcion} = req.body;
    
    console.log(descripcion)

    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_tipos_eventos SET descripcion_otro_evento = ? WHERE id_tipo_evento = ?',
        [descripcion, idTipoEvento],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Error al actualizar el tipo de evento' });
            } else {
                console.log('Tipo de evento actualizado con éxito', result);
                res.status(200).json({ message: 'Tipo de evento actualizado con éxito' });
            }
        }
    );
};

module.exports = { createEvent_Type, getEvent_Type, deleteEvent_Type, updateEvent_Type, getOnlyEvent_Type };

