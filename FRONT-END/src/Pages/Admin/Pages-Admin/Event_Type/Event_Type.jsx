import React, { useState } from 'react'
import Axios from 'axios'
import Modal from 'react-modal'
import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'
import Grid_Event_Type from "../../../../Pages/Admin/Pages-Admin/Event_Type/Grid_Event_Type";

export default function Event_Type() {

  //ESTADO DONDE GUARDAMOS LA CONSULTA DE LAS FACULTADES
  const [Event_TypeList, setEvent_TypeList] = useState([])


  const handleDescripcionChange = (e) => {
    const updatedEditingEvent_Type = { ...editingEvent_Type, descripcion: e.target.value };
    setEditingEvent_Type(updatedEditingEvent_Type);
  };



  //ESTADOS PARA GUARDAR LA INFORMACION OBTENIDA DE LA VENTANA EDIT
  const [editingEvent_Type, setEditingEvent_Type] = useState({});

  //ESTADO PARA VER SI LA VENTANA EMERGENTE ESTA ABIERTA O CERRADA
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FUNCION PARA ABRIR LA VENTANA EMERGENTE de edición
  const openModal = (TipoEvento) => {
    setEditingEvent_Type(TipoEvento);
    setIsModalOpen(true);
  };

  // FUNCION PARA CERRA LA VENTANA EMERGENTE DE edición
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Función para actualizar un tipo de evento
  const updateEvent_Type = () => {
    Axios.put(`http://localhost:3000/updateEvent_Type/${editingEvent_Type.id_tipo_evento}`, {
      descripcion: editingEvent_Type.descripcion,
    })
      .then(() => {
        alert('Tipo de evento actualizado.');
        getEvent_Type();
        //closeModal(); // Cierra el modal después de la actualización
      })
      .catch((error) => {
        console.error(error);
      });
  };




  //FUNCION PARA CREAR LAS facultades
  const [descripcion, setdescripcion] = useState('')

  const createEvent_Type = () => {
    Axios.post('http://localhost:3000/createEvent_Type', {
      descripcion: descripcion,
    }).then((err,responde) => {
      alert('Tipo de evento registrado.')
      getEvent_Type();
    }).catch((error) => {
      console.error(error);
    });

  }



  //FUNCION PARA MOSTRAR LAS FACULTADES EN LA GRID
  const getEvent_Type = () => {
    Axios.get('http://localhost:3000/getEvent_Type').then((respond) => {
      setEvent_TypeList(respond.data)
    })
  }


  //FUNCION PARA ELIMINAR UNA SEDE CON EL ID
  const handleDelete = (id) => {
    // Hacer una solicitud DELETE al servidor para eliminar el tipo de evento
    Axios.delete(`http://localhost:3000/deleteEvent_Type/${id}`)
      .then((response) => {
        alert("Tipo de evento eliminado satisfactoriamente!");
        getEvent_Type();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // funcion para traer un solo dato en el grid...
  const getOnlyEvent_Type = (descripcion) => {
    Axios.get(`http://localhost:3000/getOnlyEvent_Type/${descripcion}`).then((respond) => {
        setEvent_TypeList(respond.data);
        console.log(' actualizado:', Event_TypeList);
      })
  }


  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="Tipo de evento" />
        </div>
        <div className='row'>
          <div className='col-10'>
            <InputField label='nombre' type='text' id='nombre' placeholder='Nombre de la facultad' onChange={(e) => setdescripcion(e.target.value)}/>
          </div>
          <div className='col-2'>
            <Buttons title='Consultar' color='white'   onClick={() => (descripcion.length === 0 ? getEvent_Type() : getOnlyEvent_Type(descripcion))}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Grid_Event_Type List={Event_TypeList} handleDelete={handleDelete} handleEdit={openModal} />
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel='Editar descripcion'
        >
          <h2>Editar tipo evento</h2>
          <div className='col-10'>
            <InputField
              label='Nombre'
              type='text'
              id='Nombre-Descripcion-edit'
              placeholder='Nombre del tipo evento'
              value={editingEvent_Type.descripcion|| ''}
              onChange={handleDescripcionChange}
            />
          </div>
          {/* Agregar campos para otros atributos (dirección, teléfono, etc.) */}
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar Cambios' color='white' onClick={updateEvent_Type} />
            </div>
          </div>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
        <div className='container-fluid mt-4 d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-center'>
            <Buttons title='Guardar' color='white' onClick={createEvent_Type} />
          </div>
        </div>
      </div>
    </div>
  );
}
