/**SEDES */
import React, { useState } from 'react'
import Axios from 'axios'

import Title from '../../../components/Title'
import InputField from '../../../components/InputField'
import Buttons from '../../../components/Buttons'
import Grid_Muestra from "../../../components/Grid_Muestra";



export default function Headquarters() {


  const [nombre, setnombre] = useState('')
  const [direccion, setdireccion] = useState('')
  const [telefono, settelefono] = useState('')

  const [HeadquartersList, setHeadquartersList] = useState([])

  const createHeadquarters = () =>{
    
    Axios.post('http://localhost:3000/createHeadquarters',{
    nombre:nombre,
    direccion:direccion,
    telefono:telefono
  }).then(()=>{
    alert('Sede registrada.')
  })
  
  }

  const getHeadquarters = () =>{
    Axios.get('http://localhost:3000/getHeadquarters').then((respond)=>{
    setHeadquartersList(respond.data)
  })
  
  }
  console.log(HeadquartersList)

  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row'>
        <div className='mb-5 d-flex justify-content-center'>
          <Title title='SEDES' />
        </div>
          <div className='row'>
            <div className='col-10'>
              <InputField label='Nombre' type='text' id='Nombre-sede' placeholder='Nombre de la sede' value={(e) => { setnombre(e.target.value) }} />
            </div>
            <div className='col-2'>
              <Buttons title='Consultar' color='white' onClick={getHeadquarters} />
            </div>
            <div className='col-10'>
              <InputField label='Direccion' type='text' id='Direccion-sede' placeholder='Direccion de la sede' value={(e) => { setdireccion(e.target.value) }} />
            </div>
            <div className='col-10'>
              <InputField label='Telefono' type='text' id='Telefono-sede' placeholder='Telefono de la sede' value={(e) => { settelefono(e.target.value) }} />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Grid_Muestra List={HeadquartersList}/>
            </div>
          </div>
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar' color='white' onClick={createHeadquarters}/>
            </div>
          </div>
      </div>
    </div>
  );
}



