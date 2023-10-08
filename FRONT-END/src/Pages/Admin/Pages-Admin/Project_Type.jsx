<<<<<<< HEAD
import React from "react";
import Title from "../../../components/Title";
import InputField from "../../../components/InputField";
import Buttons from "../../../components/Buttons";
=======
import React from 'react'
import Title from '../../../components/Title'
import InputField from '../../../components/InputField'
import Buttons from '../../../components/Buttons'
>>>>>>> KevinAcevedo
import Grid_Muestra from "../../../components/Grid_Muestra";

export default function Project_Type() {
  return (
<<<<<<< HEAD
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="TIPO DE PROYECTO" />
        </div>
        <form method="POST" action="/Project_Type">
          <div className="row">
            <div className="col-10">
              <InputField
                label="Nombre"
                type="text"
                id="Nombre-Tipo-Proyecto"
                placeholder="Tipo de proyecto"
              />
            </div>
            <div className="col-2">
              <Buttons title="Consultar" color="white" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Grid_Muestra />
            </div>
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons title="Guardar" color="white" type="submit" />
=======
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row'>
        <form method="POST" action="./Headquarters">
          <div className='mb-5 d-flex justify-content-center'>
            <Title title='TIPO DE PROYECTO' />
          </div>
          <div className='row'>
            <div className='col-10'>
              <InputField label='Nombre' type='text' id='Nombre' placeholder='Nombre' />
            </div>
            <div className='col-2'>
              <Buttons title='Consultar' color='white' />
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
>>>>>>> KevinAcevedo
            </div>
          </div>
        </form>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> KevinAcevedo
