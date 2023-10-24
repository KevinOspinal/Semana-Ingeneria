import React, { useState } from "react";
import Axios from "axios";
import Modal from "react-modal";
import Title from "../../../../components/Title";
import InputField from "../../../../components/InputField";
import Buttons from "../../../../components/Buttons";
import Grid_Facultades from "../../../../Pages/Admin/Pages-Admin/Falcuties/Grid_Facultades";

export default function Faculties() {
  //ESTADO DONDE GUARDAMOS LA CONSULTA DE LAS FACULTADES
  const [FacultiesList, setFacultiesList] = useState([]);

  const handleNombreChange = (e) => {
    const updatedEditingFacultad = {
      ...editingFacultad,
      nombre_facultad: e.target.value,
    };
    setEditingFaculties(updatedEditingFacultad);
  };

  //ESTADOS PARA GUARDAR LA INFORMACION OBTENIDA DE LA VENTANA EDIT
  const [editingFacultad, setEditingFaculties] = useState({});

  //ESTADO PARA VER SI LA VENTANA EMERGENTE ESTA ABIERTA O CERRADA
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FUNCION PARA ABRIR LA VENTANA EMERGENTE de edición
  const openModal = (facultad) => {
    setEditingFaculties(facultad);
    setIsModalOpen(true);
  };

  // FUNCION PARA CERRA LA VENTANA EMERGENTE DE edición
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Función para actualizar una facultad
  const updateFaculties = () => {
    Axios.put(
      `http://localhost:3000/updateFaculties/${editingFacultad.id_facultad}`,
      {
        nombre: editingFacultad.nombre_facultad,
      }
    )
      .then(() => {
        alert("Facultad actualizada.");
        getFaculties();
        //closeModal(); // Cierra el modal después de la actualización
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //FUNCION PARA CREAR LAS facultades
  const [nombre, setnombre] = useState("");

  const createFaculties = () => {
    Axios.post("http://localhost:3000/createFaculties", {
      nombre: nombre,
    })
      .then((err, responde) => {
        alert("Facultad registrada.");
        getFaculties();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //FUNCION PARA MOSTRAR LAS FACULTADES EN LA GRID
  const getFaculties = () => {
    Axios.get("http://localhost:3000/getFaculties").then((respond) => {
      setFacultiesList(respond.data);
    });
  };

  //FUNCION PARA ELIMINAR UNA SEDE CON EL ID
  const handleDelete = (id) => {
    // Hacer una solicitud DELETE al servidor para eliminar la sede
    Axios.delete(`http://localhost:3000/deleteFaculties/${id}`)
      .then((response) => {
        alert("Facultad eliminada satisfactoriamente!!");
        getFaculties();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // funcion para traer un solo dato en el grid...
  const getOnlyFaculties = (nombre) => {
    Axios.get(`http://localhost:3000/getOnlyFaculties/${nombre}`).then(
      (respond) => {
        setFacultiesList(respond.data);
        console.log("FacultiesList actualizado");
      }
    );
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="FACULTADES" />
        </div>
        <div className="row">
          <div className="col-10">
            <InputField
              label="Nombre"
              type="text"
              id="nombre"
              placeholder="Nombre de la facultad"
              onChange={(e) => setnombre(e.target.value)}
            />
          </div>
          <div className="col-2">
            <Buttons
              title="Consultar"
              color="white"
              colorbutton="black"
              onClick={() =>
                nombre.length === 0 ? getFaculties() : getOnlyFaculties(nombre)
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Grid_Facultades
              List={FacultiesList}
              handleDelete={handleDelete}
              handleEdit={openModal}
            />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Editar Nombre"
        >
          <h2>Editar Facultad</h2>
          <div className="col-10">
            <InputField
              label="Nombre"
              type="text"
              id="Nombre-Descripcion-edit"
              placeholder="Nombre de la facultad"
              value={editingFacultad.nombre_facultad || ""}
              onChange={handleNombreChange}
            />
          </div>
          {/* Agregar campos para otros atributos (dirección, teléfono, etc.) */}
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons
                title="Guardar Cambios"
                color="white"
                colorbutton="black"
                onClick={updateFaculties}
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
              colorbutton="black"
              onClick={createFaculties}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
