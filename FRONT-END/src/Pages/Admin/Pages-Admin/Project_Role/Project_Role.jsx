import React, { useState } from 'react'
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
    const updatedEditingrol_proyecto = { ...editingrol_proyecto, descripcion: e.target.value };
    setEditingrol_proyecto(updatedEditingrol_proyecto);
  };


  //ESTADOS PARA GUARDAR LA INFORMACION OBTENIDA DE LA VENTANA EDIT
  const [editingrol_proyecto, setEditingrol_proyecto] = useState({});

  //ESTADO PARA VER SI LA VENTANA EMERGENTE ESTA ABIERTA O CERRADA
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FUNCION PARA ABRIR LA VENTANA EMERGENTE de edición
  const openModal = (rol_proyecto) => {
    setEditingrol_proyecto(rol_proyecto);
    setIsModalOpen(true);
  };

  // FUNCION PARA CERRA LA VENTANA EMERGENTE DE edición
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Función para actualizar una sede
  const updateProject_Role = () => {
    Axios.put(`http://localhost:3000/updateProject_Role/${editingrol_proyecto.id_rol_proyecto}`, {
      descripcion: editingrol_proyecto.descripcion,
    })
      .then(() => {
        alert('Descripcion actualizada.');
        getProject_Role();
        //closeModal(); // Cierra el modal después de la actualización
      })
      .catch((error) => {
        console.error(error);
      });
  };




  //FUNCION PARA CREAR LAS SEDES
  const [descripcion, setdescripcion] = useState('')
  const createProject_Role = () => {
    Axios.post('http://localhost:3000/createProject_Role', {
      descripcion: descripcion,
    }).then((err,responde) => {
      alert('Descripcion registrada.')
      getProject_Role();
    }).catch((error) => {
      console.error(error);
    });

  }



  //FUNCION PARA MOSTRAR LAS SEDES EN LA GRID
  const getProject_Role = () => {
    Axios.get('http://localhost:3000/getProject_Role').then((respond) => {
      setProject_RoleList(respond.data)
    })
  }


  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/deleteProject_Role/${id}`)
      .then((response) => {
        alert("Tipo de usuario eliminado satisfactoriamente!!");
        getProject_Role();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // funcion para traer un solo dato en el grid...
  const getOnlyProject_Role = (descripcion) => {
    Axios.get(`http://localhost:3000/getOnlyProject_Role/${descripcion}`).then((respond) => {
        setProject_RoleList(respond.data);
      console.log('Project_RoleList actualizado');
      })
  }



  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="ROL DEL PROYECTO" />
        </div>
        <div className='row'>
          <div className='col-10'>
            <InputField label='descripcion' type='text' id='descripcion' placeholder='Nombre de la Descipcion' onChange={(e) => setdescripcion(e.target.value)}/>
          </div>
          <div className='col-2'>
            <Buttons title='Consultar' color='white'   onClick={() => (descripcion.length === 0 ? getProject_Role() : getOnlyProject_Role(descripcion))}/>
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
              value={editingrol_proyecto.descripcion || ''}
              onChange={handleNombreChange}
            />
          </div>
          {/* Agregar campos para otros atributos (dirección, teléfono, etc.) */}
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar Cambios' color='white' onClick={updateProject_Role} />
            </div>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        <div className='container-fluid mt-4 d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <Buttons title='Guardar' color='white' onClick={createProject_Role} />
          </div>
        </div>
      </div>
    </div>
  );
}



