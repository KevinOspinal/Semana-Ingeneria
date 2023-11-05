import React, { useState, useEffect } from "react";
import Axios from "axios";
import Swal from 'sweetalert2';
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
      .then((response) => {
        getProjects();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Proyecto registrado exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al registrar el proyecto. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  //FUNCION PARA CONSULTAR TODAS LOS PROYECTOS CREADOS Y TAMBIEN PARA UNO SOLO
  const getProjects = () => {
    Axios.get("http://localhost:3000/getProjects")
      .then((response) => {
        setProjectsList(response.data);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener los proyectos. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  const getOnlyProjects = (nombre) => {
    Axios.get(`http://localhost:3000/getOnlyProjects/${nombre}`)
      .then((response) => {
        setProjectsList(response.data);
        console.log('Proyectos actualizados');
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener los proyectos. Por favor, inténtelo de nuevo más tarde.',
        });
      });
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
        closeModal();
        getProjects();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Proyecto actualizado exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al actualizar el proyecto. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  
  //FUNCION PARA ELIMINAR UN PROYECTO
  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el proyecto permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3000/deleteProjects/${id}`)
          .then(() => {
            getProjects();
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Proyecto eliminado exitosamente.',
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un error al eliminar el proyecto. Por favor, inténtelo de nuevo más tarde.',
            });
          });
      }
    });
  };
  
  //ESTA FUNCION ES PARA CONSULTAR TODOS LOS TIPOS DE PROYECTOS CREADOS
  const [optionsDrop, setOptionsDrop] = useState([]); // Estado para almacenar los tipos de proyecto
  
  const getProject_Type = () => {
    Axios.get("http://localhost:3000/getProject_Type")
      .then((response) => {
        // Verifica si la respuesta contiene datos antes de actualizar el estado
        if (response.data && response.data.length > 0) {
          setOptionsDrop(response.data);
        } else {
          // Puedes mostrar una notificación si no se encontraron datos
          Swal.fire({
            icon: 'info',
            title: 'Información',
            text: 'No se encontraron tipos de proyectos.',
          });
        }
      })
      .catch((error) => {
        console.error("Error al obtener tipos de proyectos:", error);
        // Muestra una notificación de error en caso de problemas
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener tipos de proyectos. Por favor, inténtelo de nuevo más tarde.',
        });
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
        <div className="mt-5 d-flex justify-content-center">
          <Title title="PROYECTOS" />
        </div>
        <div className="row mt-5">
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
                selectTipoProyecto={editingProjects.id_tipo_proyecto}
              />
            </div>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons
                  title="Guardar Cambios"
                  color="white"
                  onClick={updateProjects}
                  colorbutton="black"
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
