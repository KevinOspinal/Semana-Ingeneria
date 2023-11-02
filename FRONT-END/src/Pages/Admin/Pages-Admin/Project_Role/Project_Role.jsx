/**ROL POR PROYECTO */
import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Axios from 'axios'
import Modal from 'react-modal'; // Importa react-modal
import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'
import Grid_Project_Role from "../../../../Pages/Admin/Pages-Admin/Project_Role/Grid_Project_Role";



export default function Project_Role() {


  //ESTADO DONDE GUARDAMOS LA CONSULTA DE LAS SEDES
  const [ Project_RoleList, setProject_RoleList] = useState([])


  const handleNombreChange = (e) => {
    const updatedEditingrol_proyecto = { ...editingrol_proyecto, descripcion_rol_proyecto: e.target.value };
    setEditingrol_proyecto(updatedEditingrol_proyecto);
  };




  // FUNCION PARA ABRIR Y CERRAR LA VENTANA EMERGENTE de edición
  const openModal = (rol_proyecto) => {
    setEditingrol_proyecto(rol_proyecto);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  //ESTADO PARA VER SI LA VENTANA EMERGENTE ESTA ABIERTA O CERRADA
  const [isModalOpen, setIsModalOpen] = useState(false);




  // Función para actualizar una sede

  //ESTADOS PARA GUARDAR LA INFORMACION OBTENIDA DE LA VENTANA EDIT
  const [editingrol_proyecto, setEditingrol_proyecto] = useState({});
// Función para actualizar un rol de proyecto
const updateProject_Role = () => {
  Axios.put(`http://localhost:3000/updateProject_Role/${editingrol_proyecto.id_rol_proyecto}`, {
    descripcion_rol_proyecto: editingrol_proyecto.descripcion_rol_proyecto,
  })
    .then(() => {
      getProject_Role();
      closeModal(); // Cierra el modal después de la actualización
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Descripción actualizada exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al actualizar la descripción. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

// Función para crear un rol de proyecto
const [descripcion_rol_proyecto, setdescripcion] = useState('');

const createProject_Role = () => {
  Axios.post('http://localhost:3000/createProject_Role', {
    descripcion_rol_proyecto: descripcion_rol_proyecto,
  })
    .then(() => {
      getProject_Role();
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Descripción registrada exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al registrar la descripción. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

// Función para mostrar los roles de proyecto en la grid
const getProject_Role = () => {
  Axios.get('http://localhost:3000/getProject_Role')
    .then((respond) => {
      setProject_RoleList(respond.data);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Roles de proyecto obtenidos exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al obtener los roles de proyecto. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

// Función para eliminar un rol de proyecto
const handleDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará el rol de proyecto permanentemente.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo',
  }).then((result) => {
    if (result.isConfirmed) {
      Axios.delete(`http://localhost:3000/deleteProject_Role/${id}`)
        .then(() => {
          getProject_Role();
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Rol de proyecto eliminado exitosamente.',
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al eliminar el rol de proyecto. Por favor, inténtelo de nuevo más tarde.',
          });
        });
    }
  });
};


// Función para traer un solo dato en la grid...
const getOnlyProject_Role = (descripcion_rol_proyecto) => {
  Axios.get(`http://localhost:3000/getOnlyProject_Role/${descripcion_rol_proyecto}`)
    .then((respond) => {
      setProject_RoleList(respond.data);
      console.log('Project_RoleList actualizado');
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al obtener el rol de proyecto. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="ROL DEL PROYECTO" />
        </div>
        <div className='row'>
          <div className='col-10'>
            <InputField label='Descripcion' type='text' id='Descripcion' placeholder='Nombre de la Descripcion' onChange={(e) => setdescripcion(e.target.value)}/>
          </div>
          <div className='col-2'>
            <Buttons title='Consultar' color='white' colorbutton='black'   onClick={() => (descripcion_rol_proyecto.length === 0 ? getProject_Role() : getOnlyProject_Role(descripcion_rol_proyecto))}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Grid_Project_Role List={Project_RoleList} handleDelete={handleDelete} handleEdit={openModal} />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel='Editar Descripcion'
        >
          <h2>Editar Rol en Proyecto</h2>
          <div className='col-10'>
            <InputField
              label='Nombre'
              type='text'
              id='Nombre-Descripcion-edit'
              placeholder='Nombre de la sede'
              value={editingrol_proyecto.descripcion_rol_proyecto || ''}
              onChange={handleNombreChange}
            />
          </div>
          {/* Agregar campos para otros atributos (dirección, teléfono, etc.) */}
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar Cambios' color='white' colorbutton='black' onClick={updateProject_Role} />
            </div>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        <div className='container-fluid mt-4 d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <Buttons title='Guardar' color='white' colorbutton='black' onClick={createProject_Role} />
          </div>
        </div>
      </div>
    </div>
  );
}



