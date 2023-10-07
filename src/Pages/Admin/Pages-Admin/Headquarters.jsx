/**SEDES */
import React from 'react'
import Title from '../../../components/Title'
import InputField from '../../../components/InputField'
import Buttons from '../../../components/Buttons'
import Grid_Muestra from "../../../components/Grid_Muestra";

export default function Headquarters() {
  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row'>
        <form method="POST" action="./Headquarters">
          <div className='mb-5 d-flex justify-content-center'>
            <Title title='SEDES' />
          </div>
          <div className='row'>
            <div className='col-10'>
              <InputField label='Nombre' type='text' id='Nombre-sede' placeholder='Nombre de la sede' />
            </div>
            <div className='col-2'>
              <Buttons title='Consultar' color='white' />
            </div>
            <div className='col-10'>
              <InputField label='Direccion' type='text' id='Direccion-sede' placeholder='Direccion de la sede' />
            </div>
            <div className='col-10'>
              <InputField label='Telefono' type='text' id='Telefono-sede' placeholder='Telefono de la sede' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Grid_Muestra />
            </div>
          </div>
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar' color='white' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}





