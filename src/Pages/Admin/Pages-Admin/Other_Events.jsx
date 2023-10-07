/**SEDES */
import React from 'react'
import Title from '../../../components/Title'
import DropListField from '../../../components/DropListField'
import InputField from '../../../components/InputField'
import Buttons from '../../../components/Buttons'
import Grid_Muestra from '../../../components/Grid_Muestra'
export default function Other_Events() {
  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='mb-5 d-flex justify-content-center'>
          <Title title='OTROS EVENTOS' />
          <form method = 'POST' action =''></form>
        </div>
          <div className='row'>
            <div className='col-10'>
              <DropListField label='Nombre' selectOption='seleccione un evento'/>
            </div>
            <div className='col-10'>
            <DropListField label='Sede' selectOption='seleccione una sede'/>
            </div>
            <div className='col-10'>
              <InputField label='Cupo' type='text' id='cupo' placeholder='cupo disponible' />
            </div>
            <div className='col-10'>
              <InputField label='Fecha' type='date' id='fecha' />
            </div>
            <div className='col-10'>
              <InputField label='Hora' type='time' id='hora' />
            </div>
            <div className='col-10'>
              <InputField label='Estado' type='text' id='estado' placeholder='Estado del evento' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
            <Grid_Muestra/>
            </div>
          </div>
          <div className='container-fluid mt-4 d-flex justify-content-center'>
              <div className='col-4 d-flex justify-content-center'>
                <Buttons title='Guardar' color='white' />
              </div>

          </div>
      </div>
      <form/>
    </div>
  );
}
