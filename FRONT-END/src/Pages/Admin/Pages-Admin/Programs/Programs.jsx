import React from "react";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import DropListField from "../../../../components/DropListField";
import InputField from "../../../../components/InputField";

export default function Programs() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="PROGRAMAS" />
        </div>
          <div className="row">
            <div className="col-10">
              <InputField
                label="Nombre"
                type="text"
                id="Nombre-Programa"
                placeholder="Nombre del programa"
              />
            </div>
            <div className="col-2">
              <Buttons title="Consultar" color="white" colorbutton='black' />
            </div>
            <div className="col-10">
              <DropListField
                label="Facultad"
                id=""
                selectOption="Seleciona facultad"
              />
            </div>
            <div className="row">
              <div className="col-12">
               //grid
              </div>
            </div>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons title="Guardar" color="white" colorbutton='black' />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
