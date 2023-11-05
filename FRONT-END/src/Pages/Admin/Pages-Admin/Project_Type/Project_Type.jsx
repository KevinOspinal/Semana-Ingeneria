import { useState } from 'react'
import Swal from 'sweetalert2';

import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'
import Grid_Project_Type from './Grid_Project_Type'
import Axios from 'axios'
import Modal from 'react-modal'; // Importa react-modal





export default function Project_Type() {

  //ESTADO DONDE GUARDAMOS LA CONSULTA DE LOS TIPOS PROYECTOS
  const [ProjectTypeList, setProjectTypeList] = useState([])


  //FUNCION PARA CREAR UN TIPO PROYECTO
  const [descripcion, setDescripcion] = useState("");
// Función para crear un tipo de proyecto
const createProject_Type = () => {
  Axios.post("http://localhost:3000/createProject_Type", {
    descripcion: descripcion
  })
    .then(() => {
      getProject_Type();
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Tipo de proyecto registrado exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al registrar el tipo de proyecto. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

// Función para consultar todos los tipos de proyecto creados y también para uno solo
const getProject_Type = () => {
  Axios.get('http://localhost:3000/getProject_Type')
    .then((respond) => {
      setProjectTypeList(respond.data);
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al obtener los tipos de proyecto. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

const getOnlyProject_Type = (descripcion) => {
  Axios.get(`http://localhost:3000/getOnlyProject_Type/${descripcion}`)
    .then((respond) => {
      setProjectTypeList(respond.data);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Tipos de proyecto actualizados exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al actualizar los tipos de proyecto. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

const handleDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará el tipo de proyecto permanentemente.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo',
  }).then((result) => {
    if (result.isConfirmed) {
      Axios.delete(`http://localhost:3000/deleteProject_Type/${id}`)
        .then(() => {
          getProject_Type();
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Tipo de proyecto eliminado exitosamente.',
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al eliminar el tipo de proyecto. Por favor, inténtelo de nuevo más tarde.',
          });
        });
    }
  });
};



  // FUNCION PARA ABRIR Y CERRAR LA VENTANA EMERGENTE de edición
  const openModal = (tipo_proyecto) => {
    setEditingProjecto_Type(tipo_proyecto);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  //ESTADO PARA VER SI LA VENTANA EMERGENTE ESTA ABIERTA O CERRADA
  const [isModalOpen, setIsModalOpen] = useState(false);

  //ESTADOS PARA GUARDAR LA INFORMACION OBTENIDA DE LA VENTANA EDIT

  const [editingProjecto_Type, setEditingProjecto_Type] = useState({});

  const handleNombreChange = (e) => {
    const updatedEditingProjecto_Type = { 
      ...editingProjecto_Type, descripcion_tipo_proyecto: e.target.value };
    setEditingProjecto_Type(updatedEditingProjecto_Type);
  };

  const updateProject_Type = () => {
    Axios.put(`http://localhost:3000/updateProject_Type/${editingProjecto_Type.id_tipo_proyecto}`, {
      descripcion: editingProjecto_Type.descripcion_tipo_proyecto,
    })
      .then(() => {
        closeModal()
        getProject_Type();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Tipo de proyecto actualizado exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al actualizar el tipo de proyecto. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };
  

  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='mb-5 d-flex justify-content-center'>
          <Title title='TIPO DE PROYECTO' />
        </div>
        <div className='row'>
          <div className='col-10'>
            <InputField label='Nombre' type='text' id='Nombre' placeholder='Nombre' onChange={(e) => setDescripcion(e.target.value)} />
          </div>
          <div className='col-2'>
            <Buttons title='Consultar' colorbutton='black' color='white' onClick={() => (descripcion.length === 0 ? getProject_Type() : getOnlyProject_Type(descripcion))} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Grid_Project_Type List={ProjectTypeList} handleDelete={handleDelete} handleEdit={openModal} />
          </div>
          <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel='Editar Descripcion'
        >
          <h2>Editar Tipo de Proyecto</h2>
          <div className='col-10'>
            <InputField
              label='Nombre'
              type="text"
              id='Nombre-Descripcion'
              placeholder='Nombre de la sede'
                value={editingProjecto_Type.descripcion_tipo_proyecto || ''}
              onChange={handleNombreChange}
            />
          </div>
          {/* Agregar campos para otros atributos (dirección, teléfono, etc.) */}
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
                <Buttons title='Guardar Cambios' color='white' onClick={updateProject_Type} colorbutton='black' />
            </div>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        </div>
        <div className='container-fluid mt-4 d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <Buttons title='Guardar' colorbutton='black' color='white' onClick={createProject_Type} />
          </div>
        </div>
      </div>
    </div>
  );
}