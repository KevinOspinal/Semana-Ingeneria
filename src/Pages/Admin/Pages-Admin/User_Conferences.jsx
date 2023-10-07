import React from "react";
import Title from "../../../components/Title";
import Buttons from "../../../components/Buttons";
import Grid_Muestra from "../../../components/Grid_Muestra";
import DropListField from "../../../components/DropListField";

export default function User_Conferences() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="USUARIO POR CONFERENCIA" />
        </div>
        <form action="/Proyect_User" method="POST">
          <div className="row">
            <div className="col-10">
              <DropListField label="Usuario" selectOption="Seleciona Usuario" />
            </div>           
            <div className="col-10">
              <DropListField
                label="Conferencia"
                selectOption="Seleciona Conferencia "
              />
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
