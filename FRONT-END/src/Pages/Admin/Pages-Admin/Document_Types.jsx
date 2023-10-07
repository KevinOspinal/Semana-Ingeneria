import React from 'react'
import InputField from "../../../components/InputField";
import Title from "../../../components/Title";
import Buttons from "../../../components/Buttons";
import Grid_Muestra from "../../../components/Grid_Muestra";

export default function Document_Types() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="TIPO DE DOCUMENTO" />
        </div>
        <form method="POST" action="./Document_Type">
          <div className="row">
            <div className="col-10">
              <InputField
                label="Nombre"
                type="text"
                id="Nombre-Tipo-Documento"
                placeholder="Nombre del tipo de documento"
              />
            </div>
            <div className="col-2">
              <Buttons title="Consultar" color="white" />
            </div>
            <div className="row">
              <div className="col-12">
                <Grid_Muestra />
              </div>
            </div>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons title="Guardar" color="white" />
              </div>
            </div>
          </div>
        </form>
    </div>
    </div>
  );
}