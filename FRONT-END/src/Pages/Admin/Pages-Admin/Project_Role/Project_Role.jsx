import React from "react";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Grid_Muestra from "../../../../components/Grid_Muestra";
import InputField from "../../../../components/InputField";

export default function Project_Role() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="ROL DEL PROYECTO" />
        </div>
        <form action="/Project_Role" method="POST">
          <div className="row">
            <div className="col-10">
              <InputField
                label="Nombre"
                type="text"
                id="Nombre-Rol-Proyecto"
                placeholder="Roles del proyecto"
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
