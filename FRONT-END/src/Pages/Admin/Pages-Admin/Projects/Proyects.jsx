import React from "react";
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Grid_Muestra from "../../../../components/Grid_Muestra";
import DropListField from "../../../../components/DropListField";

export default function Proyects() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="PROYECTOS" />
        </div>
        <form method="POST" action="/Proyects">
          <div className="row">
            <div className="col-10">
              <InputField
                label="Nombre"
                type="text"
                id="Nombre-Proyecto"
                placeholder="Nombre del proyecto"
              />
            </div>
            <div className="col-2">
              <Buttons title="Consultar" color="white" />
            </div>
            <div className="col-10">
              <InputField
                label="Descripcion"
                type="text"
                id="Descripcion-Proyecto"
                placeholder="Descripcion del proyecto"
              />
            </div>
            <div className="col-10">
              <DropListField
                label="Tipo de proyecto"
                id=""
                selectOption="Seleccione el tipo de proyecto"
              />
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

