import React, { useState } from "react";
import Title from "../../../../components/Title";
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
      descripcion_tipo: e.target.value,
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
      .then((err, responde) => {
        alert("Tipo de Documento registrado.");
        getDocumentType();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getDocumentType = () => {
    Axios.get("http://localhost:3000/getDocument_Type").then((response) => {
      setDocument_typeList(response.data);
    });
  };

  const getOnlyDocumentType = (descripcion) => {
    Axios.get(`http://localhost:3000/getOnlyDocument_Type/${descripcion}`).then(
      (respond) => {
        setDocument_typeList(respond.data);
        console.log("DocumentTypeList actualizada:", document_typeList);
      }
    );
  };

  const updateDocumentType = () => {
    Axios.put(
      `http://localhost:3000/updateDocument_Type/${editingDocumentType.id_tipo_documento}`,
      {
        descripcion: editingDocumentType.descripcion_tipo,
      }
    )
      .then(() => {
        alert("Tipo de Documento actualizado.");
        getDocumentType();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/deleteDocument_Type/${id}`)
      .then((response) => {
        alert("Tipo de Documento eliminado satisfactoriamente!!");
        getDocumentType();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log('edi', editingDocumentType)
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
              onChange={handleDescripcionChange}
            />
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons
                title="Guardar Cambios"
                color="white"
                onClick={updateDocumentType}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}


