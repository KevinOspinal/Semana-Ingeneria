/**ROL POR PROYECTO */
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

  const updateProject_Role = () => {
    Axios.put(`http://localhost:3000/updateProject_Role/${editingrol_proyecto.id_rol_proyecto}`, {
      descripcion_rol_proyecto: editingrol_proyecto.descripcion_rol_proyecto,
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
  const [descripcion_rol_proyecto, setdescripcion] = useState('')
  
  const createProject_Role = () => {
    Axios.post('http://localhost:3000/createProject_Role', {
      descripcion_rol_proyecto: descripcion_rol_proyecto,
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

  //FUNCION PARA ELIMINAR UNA SEDE CON EL ID
  const handleDelete = (id) => {
    // Hacer una solicitud DELETE al servidor para eliminar la sede
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
  const getOnlyProject_Role = (descripcion_rol_proyecto) => {
    Axios.get(`http://localhost:3000/getOnlyProject_Role/${descripcion_rol_proyecto}`).then((respond) => {
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
              <Buttons title='Guardar Cambios' color='white' onClick={updateProject_Role} />
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



