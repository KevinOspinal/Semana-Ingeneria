import React, { useState } from 'react'
import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'
import Grid_Project_Type from './Grid_Project_Type'
import Axios from 'axios'
import Modal from 'react-modal'; // Importa react-modal





export default function Project_Type() {

  //ESTADO DONDE GUARDAMOS LA CONSULTA DE LOS TIPOS PROYECTOS
  const [ProyectTypeList, setProyectTypeList] = useState([])


  //FUNCION PARA CREAR UN PROYECTO TYPE
  const [descripcion, setDescripcion] = useState("");

  const createConferences = () => {
    Axios.post("http://localhost:3000/createProject_Type", {
      nombre: descripcion
    }).then((responde) => {
      getProyect_Type();
      alert("Conferencia registrada.");
    })
      .catch((error) => {
        console.log(error);
      });
  };

  //FUNCION PARA CONSULTAR TODAS LAS PROJECT CREADAS Y TAMBIEN PARA UNA SOLA
  const getProyect_Type = () => {
    Axios.get('http://localhost:3000/getProject_Type').then((respond) => {
      setProyectTypeList(respond.data)
    })
  }
  const getOnlyProject_Role = (descripcion) => {
    Axios.get(`http://localhost:3000/getOnlyProject_Type/${descripcion}`).then((respond) => {
      setProyectTypeList(respond.data);
      console.log('Project_RoleList actualizado');
    })
  }


  //FUNCION PARA ELIMINAR UNA CONFERENCIA
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/deleteProject_Type/${id}`)
      .then((response) => {
        alert("Tipo proyecto eliminada satisfactoriamente!!");
        getProyect_Type();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  // FUNCION PARA ABRIR Y CERRAR LA VENTANA EMERGENTE de edición
  const openModal = (rol_proyecto) => {
    setEditingProyecto_Type(rol_proyecto);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  //ESTADO PARA VER SI LA VENTANA EMERGENTE ESTA ABIERTA O CERRADA
  const [isModalOpen, setIsModalOpen] = useState(false);

  //ESTADOS PARA GUARDAR LA INFORMACION OBTENIDA DE LA VENTANA EDIT

  const [editingProyecto_Type, setEditingProyecto_Type] = useState({});

  const handleNombreChange = (e) => {
    const updatedEditingProyecto_Type = { ...editingProyecto_Type, descripcion: e.target.value };
    setEditingProyecto_Type(updatedEditingProyecto_Type);
  };


  const updateProject_Type = () => {
    Axios.put(`http://localhost:3000/updateProject_Type/${editingProyecto_Type.id_tipo_proyecto}`, {
      descripcion: editingProyecto_Type.descripcion,
    })
      .then(() => {
        alert('Descripcion actualizada.');
        getProyect_Type();
        //closeModal(); // Cierra el modal después de la actualización
      })
      .catch((error) => {
        console.error(error);
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
            <Buttons title='Consultar' color='white' onClick={() => (descripcion.length === 0 ? getProyect_Type() : getOnlyProject_Role(descripcion))} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Grid_Project_Type List={ProyectTypeList} handleDelete={handleDelete} handleEdit={openModal} />
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
              value={editingProyecto_Type.descripcion || ''}
              onChange={handleNombreChange}
            />
          </div>
          {/* Agregar campos para otros atributos (dirección, teléfono, etc.) */}
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar Cambios' color='white' onClick={updateProject_Type} />
            </div>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        </div>
        <div className='container-fluid mt-4 d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <Buttons title='Guardar' color='white' onClick={createConferences} />
          </div>
        </div>
      </div>
    </div>
  );
}