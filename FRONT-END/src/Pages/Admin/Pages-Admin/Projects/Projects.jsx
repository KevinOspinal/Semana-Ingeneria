import React, { useState, useEffect } from "react";
import Axios from "axios";
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import DropListField_Projects from "./DropListField_Projects";
import Grid_Projects from "./Grid_Projects";
import Modal from "react-modal";

export default function Proyects() {
  //ESTE ESTADO ES EL GLOBAL PARA CONSULTAR TODAS LOS PROYECTOS
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    // Coloca aquí la llamada a getProject_Type
    getProject_Type();
  }, []); // El segundo argumento es un arreglo de dependencias vacío

  //FUNCION PARA CREAR LOS PROYECTOS QUE COPTURAMOS EN EL FORM

  //ESTA FUNCION ES PARA CAPTURAR LO QUE HAY EN TIPO DE PROYECTO
  const handleTipoProyectoChangeInput = (e) => {
    setSelectedTipoProyecto(e.target.value);
  };

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescricion] = useState("");
  const [selectedTipoProyecto, setSelectedTipoProyecto] = useState("");

  const createProjects = () => {
    Axios.post("http://localhost:3000/createProjects", {
      nombre: nombre,
      descripcion: descripcion,
      tipoProyecto: selectedTipoProyecto,
    })
      .then((responde) => {
        alert("Proyecto registrado.");
        getProjects();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //FUNCION PARA CONSULTAR TODAS LOS PROYECTOS CREADOS Y TAMBIEN PARA UNO SOLO
  const getProjects = () => {
    Axios.get("http://localhost:3000/getProjects").then((respond) => {
      setProjectsList(respond.data);
    });
  };

  const getOnlyProjects = (nombre) => {
    Axios.get(`http://localhost:3000/getOnlyProjects/${nombre}`).then(
      (respond) => {
        setProjectsList(respond.data);
        console.log("ProyectsList actualizado:");
      }
    );
  };

  //FUNCION PARA ACTUALIZAR PROYECTOS
  const updateProjects = () => {
    Axios.put(
      `http://localhost:3000/updateProjects/${editingProjects.id_proyecto}`,
      {
        nombre: editingProjects.nombre_proyecto,
        descripcion: editingProjects.descripcion_proyecto,
        tipoProyecto: editingProjects.id_tipo_proyecto,
      }
    )
      .then(() => {
        alert("Proyecto Actualizados");
        getProjects();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //FUNCION PARA ELIMINAR UN PROYECTO
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/deleteProjects/${id}`)
      .then((response) => {
        alert("Proyecto eliminado satisfactoriamente!!");
        getProjects();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //ESTA FUNCION ES PARA CONSULTAR TODOS LOS TIPOS DE PROYECTOS CREADOS
  const [optionsDrop, setOptionsDrop] = useState([]); // Estado para almacenar la SEDE seleccionado

  const getProject_Type = () => {
    Axios.get("http://localhost:3000/getProject_Type").then((respond) => {
      setOptionsDrop(respond.data);
    });
  };

  //Estas funciones onChame es para capturar los datos del MODAL EDITAR

  const [editingProjects, setEditingProjects] = useState({});

  const handleNombreChange = (e) => {
    const updatedEditingProjecto = {
      ...editingProjects,
      nombre_proyecto: e.target.value,
    };
    setEditingProjects(updatedEditingProjecto);
  };

  const handleDescripcionChange = (e) => {
    const updatedEditingProjecto = {
      ...editingProjects,
      descripcion_proyecto: e.target.value,
    };
    setEditingProjects(updatedEditingProjecto);
  };

  const handleTipoProyectoChange = (e) => {
    const updatedEditingProjecto = {
      ...editingProjects,
      id_tipo_proyecto: e.target.value,
    };
    setEditingProjects(updatedEditingProjecto);
  };

  //ESTAAS FUNCIONES SON PARA ABRIR Y CERRAR LA VENTANA EMERGENTE(MODAL)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (proyectos) => {
    setEditingProjects(proyectos);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="PROYECTOS" />
        </div>
        <div className="row">
          <div className="col-10">
            <InputField
              label="Nombre"
              type="text"
              id="Nombre-Proyecto"
              placeholder="Nombre del proyecto"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="col-2">
            <Buttons
              title="Consultar"
              colorbutton="black"
              color="white"
              onClick={() =>
                nombre.length === 0 ? getProjects() : getOnlyProjects(nombre)
              }
            />
          </div>
          <div className="col-10">
            <InputField
              label="Descripcion"
              type="text"
              id="Descripcion-Proyecto"
              placeholder="Descripcion del proyecto"
              onChange={(e) => setDescricion(e.target.value)}
            />
          </div>
          <div className="col-10">
            <DropListField_Projects
              selectTipoProyecto={selectedTipoProyecto}
              handleChange={handleTipoProyectoChangeInput}
              options={optionsDrop}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <Grid_Projects
                List={projectsList}
                handleDelete={handleDelete}
                handleEdit={openModal}
              />
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Editar Proyecto"
          >
            <h2>Editar Proyecto</h2>
            <div className="col-10">
              <InputField
                label="Nombre"
                type="text"
                id="Tipo-Nombre-Proyecto"
                placeholder="Nombre del proyecto"
                value={editingProjects.nombre_proyecto || ""}
                onChange={handleNombreChange}
              />
            </div>
            <div className="col-10">
              <InputField
                label="Descripcion"
                type="text"
                id="Descripcion-Proyecto"
                value={editingProjects.descripcion_proyecto || ""}
                onChange={handleDescripcionChange}
              />
            </div>
            <div className="col-10">
              <DropListField_Projects
                handleChange={handleTipoProyectoChange}
                options={optionsDrop}
                selectSedes={editingProjects.id_tipo_proyecto}
              />
            </div>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons
                  title="Guardar Cambios"
                  color="white"
                  onClick={updateProjects}
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
                colorbutton="black"
                color="white"
                onClick={createProjects}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
