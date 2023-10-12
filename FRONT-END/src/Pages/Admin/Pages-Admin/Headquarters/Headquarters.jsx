/**SEDES */
import React, { useState } from 'react'
import Axios from 'axios'
import Modal from 'react-modal'; // Importa react-modal
import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'
import Grid_Muestra from "./Grid_Muestra";



export default function Headquarters() {

  
  //ESTADO DONDE GUARDAMOS LA CONSULTA DE LAS SEDES
  const [HeadquartersList, setHeadquartersList] = useState([])


  const handleNombreChange = (e) => {
    const updatedEditingSede = { ...editingSede, nombre_sede: e.target.value };
    setEditingSede(updatedEditingSede);
  };

  const handleDireccionChange = (e) => {
    const updatedEditingSede = { ...editingSede, direccion: e.target.value };
    setEditingSede(updatedEditingSede);
  };

  const handleTelefonoChange = (e) => {
    const updatedEditingSede = { ...editingSede, telefono: e.target.value };
    setEditingSede(updatedEditingSede);
  };



  //ESTADOS PARA GUARDAR LA INFORMACION OBTENIDA DE LA VENTANA EDIT
  const [editingSede, setEditingSede] = useState({});

  //ESTADO PARA VER SI LA VENTANA EMERGENTE ESTA ABIERTA O CERRADA
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FUNCION PARA ABRIR LA VENTANA EMERGENTE de edición
  const openModal = (sede) => {
    setEditingSede(sede);
    setIsModalOpen(true);
  };

  // FUNCION PARA CERRA LA VENTANA EMERGENTE DE edición
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Función para actualizar una sede
  const updateSede = () => {
    Axios.put(`http://localhost:3000/updateHeadquarters/${editingSede.id_sede}`, {
      nombre: editingSede.nombre_sede,
      direccion: editingSede.direccion,
      telefono: editingSede.telefono
    })
      .then(() => {
        alert('Sede actualizada.');
        getHeadquarters();
        //closeModal(); // Cierra el modal después de la actualización
      })
      .catch((error) => {
        console.error(error);
      });
  };




  //FUNCION PARA CREAR LAS SEDES
   const [nombre, setnombre] = useState('')
   const [direccion, setdireccion] = useState('')
   const [telefono, settelefono] = useState('')
 
  const createHeadquarters = () => {
    Axios.post('http://localhost:3000/createHeadquarters', {
      nombre: nombre,
      direccion: direccion,
      telefono: telefono
    }).then((err,responde) => {
      alert('Sede registrada.')
      getHeadquarters();
    }).catch((error) => {
      console.error(error);
    });

  }



  //FUNCION PARA MOSTRAR LAS SEDES EN LA GRID
  const getHeadquarters = () => {
    Axios.get('http://localhost:3000/getHeadquarters').then((respond) => {
      setHeadquartersList(respond.data)
    })
  }


  //FUNCION PARA ELIMINAR UNA SEDE CON EL ID
  const handleDelete = (id) => {
    // Hacer una solicitud DELETE al servidor para eliminar la sede
    Axios.delete(`http://localhost:3000/deleteHeadquarters/${id}`)
      .then((response) => {
        alert("sede eliminada satisfactoriamente!!");
        getHeadquarters();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // funcion para traer un solo dato en el grid...
  const getOnlyHeadquerters = (nombre) => {
    Axios.get(`http://localhost:3000/getOnlyHeadquarters/${nombre}`).then((respond) => {
        setHeadquartersList(respond.data);
        console.log('HeadquartersList actualizado:', HeadquartersList);
      })
  }

 console.log(editingSede)
  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='mb-5 d-flex justify-content-center'>
          <Title title='SEDES' />
        </div>
        <div className='row'>
          <div className='col-10'>
            <InputField label='Nombre' type='text' id='Nombre-sede' placeholder='Nombre de la sede' onChange={(e) => setnombre(e.target.value)}/>
          </div>
          <div className='col-2'>
            <Buttons title='Consultar' color='white'   onClick={() => (nombre.length === 0 ? getHeadquarters() : getOnlyHeadquerters(nombre))}/>
          </div>
          <div className='col-10'>
            <InputField label='Direccion' type='text' id='Direccion-sede' placeholder='Direccion de la sede' onChange={(e) => { setdireccion(e.target.value) }} />
          </div>
          <div className='col-10'>
            <InputField label='Telefono' type='text' id='Telefono-sede' placeholder='Telefono de la sede' onChange={(e) => { settelefono(e.target.value) }} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Grid_Muestra List={HeadquartersList} handleDelete={handleDelete} handleEdit={openModal} />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel='Editar Sede'
        >
          <h2>Editar Sede</h2>
          <div className='col-10'>
            <InputField
              label='Nombre'
              type='text'
              id='Nombre-sede-edit'
              placeholder='Nombre de la sede'
              value={editingSede.nombre_sede || ''}
              onChange={handleNombreChange}
            />
            <InputField
              label='Direccion'
              type='text'
              id='Direccion-sede-edit'
              placeholder='Direccion de la sede'
              value={editingSede.direccion || ''}
              onChange={handleDireccionChange}
            />
            <InputField
              label='Telefono'
              type='text'
              id='Telefono-sede-edit'
              placeholder='Telegono de la sede'
              value={editingSede.telefono || ''}
              onChange={handleTelefonoChange}
            />
          </div>
          {/* Agregar campos para otros atributos (dirección, teléfono, etc.) */}
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar Cambios' color='white' onClick={updateSede} />
            </div>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        <div className='container-fluid mt-4 d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <Buttons title='Guardar' color='white' onClick={createHeadquarters} />
          </div>
        </div>
      </div>
    </div>
  );
}



