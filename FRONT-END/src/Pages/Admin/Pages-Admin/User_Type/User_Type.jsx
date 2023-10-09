import React, { useState } from "react";
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import  Axios  from "axios";
import Modal from "react-modal";
import Grid_User_Type from "../User_Type/Grid_User_Type";

export default function User_Type() {
  const [userTypeList, setUserTypeList] = useState([]);
  const [editingTipoUsuario, setEditingTipoUsuario] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descripcion, setDescripcion] = useState("");

  const handleDescripcionChange = (e) => {
    const updateEditingTipoUsuario = {
      ...editingTipoUsuario,
      descripcion: e.target.value,
    };
    setEditingTipoUsuario(updateEditingTipoUsuario);
  };

  const openModal = (descripcion) => {
    setEditingTipoUsuario(descripcion);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createUserType = () => {
    Axios.post("http://localhost:3000/createUserType", {
      descripcion: descripcion,
    })
      .then((err, responde) => {
        alert("Tipo de usuario registrado.");
        getUserType();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getUserType = () => {
    Axios.get("http://localhost:3000/getUserType").then((respond) => {
      setUserTypeList(respond.data);
    });
  };

  const getOnlyUserType = (descripcion) => {
    Axios.get(`http://localhost:3000/getOnlyUserType/${descripcion}`).then(
      (respond) => {
        setUserTypeList(respond.data);
        console.log("UserTypeList actualizada:", UserTypeList);
      }
    );
  };

  const updateTipoUsuario = () => {
    Axios.put(
      `http://localhost:3000/updateUserType/${editingTipoUsuario.id_tipo_usuario}`,
      {
        descripcion: editingTipoUsuario.descripcion,
      }
    )
      .then(() => {
        alert("Tipo de usuario actializado.");
        getUserType();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/deleteUserType/${id}`)
      .then((response) => {
        alert("Tipo de usuario eliminado satisfactoriamente!!");
        getUserType();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="TIPO DE USUARIO" />
        </div>
          <div className="row">
            <div className="col-10">
              <InputField
                label="Descripción"
                type="text"
                id="Tipo-Usuario"
                placeholder="Tipo de usuario"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="col-2">
              <Buttons
                title="Consultar"
                color="white"
                onClick={() =>
                  descripcion.length === 0
                    ? getUserType()
                    : getOnlyUserType(descripcion)
                }
              />
            </div>
            <div className="row">
              <div className="col-12">
                <Grid_User_Type
                  List={userTypeList}
                  handleDelete={handleDelete}
                  handleEdit={openModal}
                />
              </div>
            </div>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Editar Sede"
            >
              <h2>Editar Tipo de Usuario</h2>
              <div className="col-10">
                <InputField
                  label="Descripción"
                  type="text"
                  id="Tipo-Usuario"
                  placeholder="Tipo de usuario"
                  value={editingTipoUsuario.descripcion || ""}
                  onChange={handleDescripcionChange}
                />
              </div>
              <div className="container-fluid mt-4 d-flex justify-content-center">
                <div className="col-4 d-flex justify-content-center">
                  <Buttons
                    title="Guardar Cambios"
                    color="white"
                    onClick={updateTipoUsuario}
                  />
                </div>
              </div>
              <button onClick={closeModal}>Cerrar</button>
            </Modal>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons
                  title="Guardar"
                  color="white"
                  onClick={createUserType}
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
