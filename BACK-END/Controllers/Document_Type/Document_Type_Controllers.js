const conexion = require("../../db");

const createDocument_Type = (req, res) => {
    const descripcion = req.body.descripcion; 

    conexion.query("INSERT INTO tb_tipos_documentos (descripcion) VALUES (?)", [descripcion],
        (error, results) => {
            if (error) { 
                console.error(error);
                res.status(500).json({ message: "Error al agregar el tipo de Documento" });
            } else {
                console.log("El tipo de Documento se agregó con éxito");
                res.status(200).json({ message: "El tipo de documento se agregó con éxito" });
            }
        }
    )
}


const getDocument_Type = (req, res) => {
    conexion.query('SELECT * FROM tb_tipos_documentos', (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al mostrar Tipo de Documento' });
        } else {
            console.log('Tipo de Documento mostrado con éxito');
            res.json(result); // Enviar el resultado como un objeto JSON
        }
    })
}

const getOnlyDocument_Type = (req, res) => {
    const descripcion_Tipo = req.params.descripcion; // Cambiado "nombre" a "descripcion"

    conexion.query('SELECT * FROM tb_tipos_documentos WHERE descripcion = ?', [descripcionTipo],
        (error, result) => {
            if (error) {
                console.error(err);
                res.status(500).json({ message: 'Error al consultar el tipo Documento' });
            } else {
                console.log('Tipo Documento consultado con éxito');
                res.json(result);
            }
        }
    );
}

// CONSULTAS PARA PODER ELIMINAR EL TIPO DE DOCUMENTO
const deleteDocument_Type = (req, res) => {
    const idDocumentType = req.params.id;
    conexion.query('DELETE FROM tb_tipos_documentos WHERE id_tipo_documento = ?', [idDocumentType],
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'Error al eliminar el tipo de Documento' });
            } else {
                console.log('Tipo de Documento eliminado con éxito');
                res.json({ message: 'Tipo de documento eliminado con éxito' });
            }
        }
    );
}

// CONSULTA PARA PODER ACTUALIZAR EL TIPO DE DOCUMENTO
const updateDocument_Type = (req, res) => {
    const idDocumentType = req.params.id;
    const { descripcion } = req.body;
    console.log(descripcion)

    // Realiza la actualización en la base de datos usando el ID y los nuevos datos
    conexion.query(
        'UPDATE tb_tipos_documentos SET descripcion = ? WHERE id_tipo_documento = ?',
        [descripcion, idDocumentType],
        (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'Error al actualizar el tipo de Documento' });
            } else {
                console.log('Tipo de Documento actualizado con éxito', result);
                res.status(200).json({ message: 'Tipo de documento actualizado con éxito' });
            }
        }
    );
};

module.exports = {
    createDocument_Type,
    getDocument_Type,
    getOnlyDocument_Type,
    deleteDocument_Type,
    updateDocument_Type
};
