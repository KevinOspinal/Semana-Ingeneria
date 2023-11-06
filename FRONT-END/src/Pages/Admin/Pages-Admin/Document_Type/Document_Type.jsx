import React, { useState } from "react";
import Title from "../../../../components/Title";
import Swal from 'sweetalert2';
import InputField from "../../../../components/InputField";
import Buttons from "../../../../components/Buttons";
import Grid_Document_Type from "./Grid_Document_Type";
import Axios from "axios";
import Modal from "react-modal";

export default function Document_Type() {

  const [document_typeList, setDocument_typeList] = useState([]);
  const [editingDocumentType, setEditingDocumentType] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descripcion, setDescripcion] = useState("");


  const handleDescripcionChange = (e) => {
    const updatedEditingDocumentType = {
      ...editingDocumentType,
      descripcion_tipo_documento: e.target.value,
    };
    setEditingDocumentType(updatedEditingDocumentType);
  };



  const openModal = (descripcion) => {
    setEditingDocumentType(descripcion);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createDocumentType = () => {
    Axios.post("http://localhost:3000/createDocument_Type", {
      descripcion: descripcion,
    })
      .then((response) => {
        getDocumentType();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Tipo de documento creado exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al crear un tipo de documento. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  const getDocumentType = () => {
    Axios.get("http://localhost:3000/getDocument_Type")
      .then((response) => {
        setDocument_typeList(response.data);
        // Puedes mostrar una notificación de éxito aquí si lo deseas
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener los tipos de documento. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  
  const getOnlyDocumentType = (descripcion) => {
    Axios.get(`http://localhost:3000/getOnlyDocument_Type/${descripcion}`)
      .then((response) => {
        setDocument_typeList(response.data);
        console.log("DocumentTypeList actualizada:", document_typeList);
        // Puedes mostrar una notificación de éxito aquí si lo deseas
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Tipos de documento obtenidos exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener los tipos de documento. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  
  const updateDocumentType = () => {
    Axios.put(
      `http://localhost:3000/updateDocument_Type/${editingDocumentType.id_tipo_documento}`,
      {
        descripcion_tipo_documento: editingDocumentType.descripcion_tipo_documento,
      }
    )
      .then(() => {
        alert("Tipo de Documento actualizado.");
        getDocumentType();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Tipo de documento actualizado exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al actualizar el tipo de documento. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3000/deleteDocument_Type/${id}`)
          .then((response) => {
            getDocumentType();
            console.log(response.data);
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Tipo de documento eliminado exitosamente.',
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un error al eliminar el tipo de documento. Por favor, inténtelo de nuevo más tarde.',
            });
          });
      }
    });
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="TIPO DE DOCUMENTO" />
        </div>
        <div className="row">
          <div className="col-10">
            <InputField
              label="Descripción"
              type="text"
              id="Tipo-Documento"
              placeholder="Tipo de Documento"
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
                  ? getDocumentType()
                  : getOnlyDocumentType(descripcion)
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Grid_Document_Type
              List={document_typeList}
              handleDelete={handleDelete}
              handleEdit={openModal}
            />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Editar Tipo Documento"
        >
          <h2>Editar Tipo de Documento</h2>
          <div className="col-10">
            <InputField
              label="Descripción"
              type="text"
              id="Tipo-Documento"
              placeholder="Tipo de Documento"
              value={editingDocumentType.descripcion_tipo_documento || ""}
              onChange={handleDescripcionChange}
            />
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons
                title="Guardar Cambios"
                color="white"
                onClick={updateDocumentType}
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
              onClick={createDocumentType}
              colorbutton='black'
            />
          </div>
        </div>
      </div>
    </div>
  );
}


