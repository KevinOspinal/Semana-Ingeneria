import React from 'react'
import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'

export default function Event_Type() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <form method="POST" action="./Headquarters">
          <div className="mb-5 d-flex justify-content-center">
            <Title title="TIPO DE EVENTO" />
          </div>
          <div className="row">
            <div className="col-10">
              <InputField
                label="Tipo de evento"
                type="text"
                id="Tipo de evento"
                placeholder=""
              />
            </div>
            <div className="col-2">
              <Buttons title="Consultar" color="white" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              //grid
            </div>
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons title="Guardar" color="white" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
