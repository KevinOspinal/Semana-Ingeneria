import React from 'react'
import InputField from "../../../components/InputField";
import Title from "../../../components/Title";
import Buttons from "../../../components/Buttons";
import Grid from "../../../components/Grid";

export default function Document_Types() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="Tipo de Documento" />
        </div>
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
              <Grid />
            </div>
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons title="Guardar" color="white" />
            </div>
            <div className="col-4 d-flex justify-content-center">
              <Buttons title="Editar" color="white" />
            </div>
            <div className="col-4 d-flex justify-content-center">
              <Buttons title="Eliminar" color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
