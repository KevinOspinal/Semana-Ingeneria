import React from "react";
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Grid_Muestra from "../../../../components/Grid_Muestra";

export default function User_Type() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="TIPO DE USUARIO" />
        </div>
        <form method="POST" action="/User_Type">
          <div className="row">
            <div className="col-10">
              <InputField
                label="Descripción"
                type="text"
                id="Tipo-Usuario"
                placeholder="Tipo de usuario"
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
                <Buttons title="Guardar" color="white" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
