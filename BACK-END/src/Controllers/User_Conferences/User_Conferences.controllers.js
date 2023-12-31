const conexion = require('../../../db.js'); // Conexión a la base de datos


const createUserConferences = async (req, res) => {
    const Conferencia = req.body.Conferencia;
    const id_usuario = req.body.id_usuario;
    const estado_usuario = 'I'
    console.log(Conferencia)

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'INSERT INTO tb_usuarios_conferencias (id_usuario, id_conferencia, estado_usuario) VALUES (?,?,?)',
                [id_usuario, Conferencia, estado_usuario],
                (err, result) => {
                    if (err) {
                        reject(err);
                        console.log(err)
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Conferencia agregada con éxito');
        res.status(200).json({ message: 'El usuario se agrego a la lista de las conferencias' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al agregar el usuario a la conferencia' });
    }
};

//SOLICITUD PARA VER LAS CONFERENCIAS 
const getUserConferences = async (req, res) => {
    try {
        // Realiza una consulta para recuperar todos los roles de proyecto
        const result = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM tb_usuarios_conferencias ucf, tb_usuarios us, tb_conferencias c WHERE ucf.id_usuario = us.id_usuario AND ucf.id_conferencia = c.id_conferencia', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        console.log('Usuarios por conferencias consultado correctamente');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al imprimir Usuarios por conferencias.' });
    }
}

const getOnlyUserConferences = async (req, res) => {
    const Documento = req.params.documento;
    console.log(Documento)
    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM tb_usuarios_conferencias ucf, tb_usuarios us, tb_conferencias c WHERE ucf.id_usuario = us.id_usuario AND ucf.id_conferencia = c.id_conferencia AND us.documento = ?', [Documento],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        })
        console.log('Conferencia consultada con éxito');
        res.json(result);
    }
    catch (error) {
        console.log(error, 'hi')
        res.status(500).json({ message: 'Error al imprimir el tipo de usuario por conferencia' });
    }
}

//SOLICITUD PARA VER SI EL USUARIO ESTA EN LA CONFERENCIA
const getOnlyUserConferencesId = async (req, res) => {
    const idConferencia = req.params.id;
    const id_usuario = req.query.id_usuario;

    console.log(idConferencia)
    console.log(id_usuario)

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM tb_usuarios_conferencias ucf, tb_usuarios us, tb_conferencias c WHERE ucf.id_usuario = us.id_usuario AND ucf.id_conferencia = c.id_conferencia AND ucf.id_usuario = ? AND c.id_conferencia = ?', [id_usuario, idConferencia],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        })
        console.log('Conferencia consultada con éxito');
        res.json(result);
    }
    catch (error) {
        console.log(error, 'hi')
        res.status(500).json({ message: 'Error al imprimir el tipo de usuario por conferencia' });
    }
}


const deleteUserConferences = async (req, res) => {
    const idUserioConferencia = req.params.id;

    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                "DELETE FROM tb_usuarios_conferencias WHERE id_usuario_conferencia = ?",
                [idUserioConferencia],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log("Usuario por conferencia eliminado con éxito");
        res.json({ message: "Usuario por conferencia eliminado con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el Usuario por conferencia" });
    }
};


const updateUserConferences = async (req, res) => {
    const UserConferences = req.params.id;
    const estado = 'A'

    console.log('userCO', UserConferences)
    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'UPDATE tb_usuarios_conferencias SET estado_usuario = ? WHERE id_usuario_conferencia = ?',
                [estado, UserConferences],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Usuario por conferencia actualizada con éxito');
        res.status(200).json({ message: 'Usuario por conferencia  actualizada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el Usuario por conferencia ' });
    }
};




const getUserConferencesId = async (req, res) => {
    const usuarioId = req.params.id;
    console.log(usuarioId)
    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT ucf.id_conferencia FROM tb_usuarios_conferencias ucf, tb_usuarios us, tb_conferencias c WHERE ucf.id_usuario = us.id_usuario AND ucf.id_conferencia = c.id_conferencia AND ucf.id_usuario = ?', [usuarioId],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        })
        console.log('Conferencia consultada con éxito');
        res.json(result);
    }
    catch (error) {
        console.log(error, 'hi')
        res.status(500).json({ message: 'Error al imprimir el tipo de usuario por conferencia' });
    }
}









const updateUserConferencesAsis = async (req, res) => {
    console.log('paso por aqui')
    const idUserConferences = req.params.id;
    const estado = 'A'
    console.log('id:', idUserConferences)
    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'UPDATE tb_usuarios_conferencias SET estado_usuario = ? WHERE id_usuario_conferencia = ?',
                [estado, idUserConferences],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });

        console.log('Usuario por conferencia actualizada con éxito');
        res.status(200).json({ message: 'Usuario por conferencia  actualizada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el Usuario por conferencia ' });
    }
};
const getOnlyUserConferencesAsis = async (req, res) => {
    const idConferencia = req.params.id_conferencia;
    const documento = req.query.documento;

    console.log(documento, idConferencia)
    try {
        const result = await new Promise((resolve, reject) => {
            conexion.query(
                'SELECT * FROM tb_usuarios_conferencias ucf, tb_usuarios us, tb_conferencias c WHERE ucf.id_usuario = us.id_usuario AND ucf.id_conferencia = c.id_conferencia AND us.documento = ? AND c.id_conferencia = ?', [documento, idConferencia],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        })
        console.log('Conferencia consultada con éxito');
        res.json(result);
    }
    catch (error) {
        console.log(error, 'hi')
        res.status(500).json({ message: 'Error al imprimir el tipo de usuario por conferencia' });
    }
}
module.exports = { createUserConferences, getUserConferences, getOnlyUserConferences, deleteUserConferences, updateUserConferences, getOnlyUserConferencesAsis, updateUserConferencesAsis, getOnlyUserConferencesId,getUserConferencesId }
