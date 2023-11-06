import React, { useState } from "react";
import Swal from 'sweetalert2';
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Axios from "axios";
import Modal from "react-modal";
import Grid_User_Type from "../User_Type/Grid_User_Type";

export default function User_Type() {
  const [userTypeList, setUserTypeList] = useState([]);
  const [editingTipoUsuario, setEditingTipoUsuario] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descripcion, setDescripcion] = useState("");


  //revisar el estado del cambio IMPORTANTE
  const handleDescripcionChange = (e) => {
    const updateEditingTipoUsuario = {
      ...editingTipoUsuario,
      descripcion_tipo_usuario: e.target.value,
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
      .then((response) => {
        getUserType();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Tipo de usuario registrado exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al registrar el tipo de usuario. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  const updateTipoUsuario = () => {
    Axios.put(`http://localhost:3000/updateUserType/${editingTipoUsuario.id_tipo_usuario}`, {
      descripcion: editingTipoUsuario.descripcion_tipo_usuario,
    })
      .then((response) => {
        getUserType();
        closeModal()
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Tipo de usuario actualizado exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al actualizar el tipo de usuario. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };

  const getUserType = () => {
    Axios.get("http://localhost:3000/getUserType").then((respond) => {
      setUserTypeList(respond.data);
    });
  };
  const getOnlyUserType = (descripcion) => {
    Axios.get(`http://localhost:3000/getOnlyUserType/${descripcion}`)
      .then((respond) => {
        setUserTypeList(respond.data);  
        // Mostrar notificación de éxito
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Datos del tipo de usuario obtenidos exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        // Mostrar notificación de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener los datos del tipo de usuario. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el tipo de usuario permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3000/deleteUserType/${id}`)
          .then((response) => {
            getUserType();
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };
  

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="TIPOS DE USUARIOS" />
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
              colorbutton='black'
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
                value={editingTipoUsuario.descripcion_tipo_usuario || ""}
                onChange={handleDescripcionChange}
              />
            </div>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons
                  title="Guardar Cambios"
                  color="white"
                  onClick={updateTipoUsuario}
                  colorbutton='black'
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
                colorbutton='black'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
