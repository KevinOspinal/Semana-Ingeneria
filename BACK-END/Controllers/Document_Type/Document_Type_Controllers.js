const conexion = require('../../db');

const createDocument_Type = async (req, res) => {
    const descripcion = req.body.descripcion;

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "INSERT INTO tb_tipos_documentos (descripcion_tipo_documento) VALUES (?)",
                [descripcion],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                }
            );
        });

        console.log("El tipo de Documento se agregó con éxito");
        res.status(200).json({ message: "El tipo de documento se agregó con éxito" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al agregar el tipo de Documento" });
    }
};

const getDocument_Type = async (req, res) => {
    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query("SELECT * FROM tb_tipos_documentos", (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

        console.log("Tipo de Documento mostrado con éxito");
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al mostrar Tipo de Documento" });
    }
};

const getOnlyDocument_Type = async (req, res) => {
    const descripcion = req.params.descripcion;

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM  tb_tipos_documentos WHERE descripcion_tipo_documento = ?',
                [descripcion],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Tipo de documento consultado con éxito');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al consultar el tipo de documento' });
    }
}

const deleteDocument_Type = async (req, res) => {
    const idDocumentType = req.params.id;

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "DELETE FROM tb_tipos_documentos WHERE id_tipo_documento = ?",
                [idDocumentType],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log("Tipo de Documento eliminado con éxito");
        res.json({ message: "Tipo de documento eliminado con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el tipo de Documento" });
    }
};

const updateDocument_Type = async (req, res) => {
    const idDocumentType = req.params.id;
    const { descripcion_tipo_documento } = req.body;

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "UPDATE tb_tipos_documentos SET descripcion_tipo_documento = ? WHERE id_tipo_documento = ?",
                [descripcion_tipo_documento, idDocumentType],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log("Tipo de Documento actualizado con éxito");
        res.status(200).json({ message: "Tipo de documento actualizado con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el tipo de documento" });
    }
};

module.exports = {
    createDocument_Type,
    getDocument_Type,
    getOnlyDocument_Type,
    deleteDocument_Type,
    updateDocument_Type,
};
