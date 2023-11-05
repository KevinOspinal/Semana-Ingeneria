/**SEDES */
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Axios from 'axios'
import Modal from 'react-modal'; // Importa react-modal
import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'
import Grid_Headquarters from './Grid_Headquarters';



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
    telefono: editingSede.telefono,
  })
    .then(() => {
      getHeadquarters();
      closeModal(); // Cierra el modal después de la actualización
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Sede actualizada exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al actualizar la sede. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

// FUNCION PARA CREAR LAS SEDES
const [nombre, setnombre] = useState('');
const [direccion, setdireccion] = useState('');
const [telefono, settelefono] = useState('');

const createHeadquarters = () => {
  Axios.post('http://localhost:3000/createHeadquarters', {
    nombre: nombre,
    direccion: direccion,
    telefono: telefono,
  })
    .then(() => {
      alert('Sede registrada.');
      getHeadquarters();
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Sede registrada exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al registrar la sede. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

// FUNCION PARA MOSTRAR LAS SEDES EN LA GRID
const getHeadquarters = () => {
  Axios.get('http://localhost:3000/getHeadquarters')
    .then((respond) => {
      setHeadquartersList(respond.data);
      
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al obtener las sedes. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

// FUNCION PARA ELIMINAR UNA SEDE CON EL ID
const handleDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'No podrás revertir esto.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo',
  }).then((result) => {
    if (result.isConfirmed) {
      Axios.delete(`http://localhost:3000/deleteHeadquarters/${id}`)
        .then((response) => {
          getHeadquarters();
          console.log(response.data);
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Sede eliminada exitosamente.',
          });
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al eliminar la sede. Por favor, inténtelo de nuevo más tarde.',
          });
        });
    }
  });
};

// Función para traer un solo dato en el grid...
const getOnlyHeadquerters = (nombre) => {
  Axios.get(`http://localhost:3000/getOnlyHeadquarters/${nombre}`)
    .then((respond) => {
      setHeadquartersList(respond.data);
      console.log('HeadquartersList actualizado:', HeadquartersList);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Dato obtenido exitosamente.',
      });
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al obtener el dato. Por favor, inténtelo de nuevo más tarde.',
      });
    });
};

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
            <Buttons title='Consultar' colorbutton='black' color='white'   onClick={() => (nombre.length === 0 ? getHeadquarters() : getOnlyHeadquerters(nombre))}/>
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
            <Grid_Headquarters List={HeadquartersList} handleDelete={handleDelete} handleEdit={openModal} />
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
              <Buttons title='Guardar Cambios' color='white' colorbutton='black' onClick={updateSede} />
            </div>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        <div className='container-fluid mt-4 d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <Buttons title='Crear' colorbutton='black' color='white' onClick={createHeadquarters} />
          </div>
        </div>
      </div>
    </div>
  );
}



