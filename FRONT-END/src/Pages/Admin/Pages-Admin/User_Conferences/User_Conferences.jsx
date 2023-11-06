import React from "react";
import Swal from 'sweetalert2';

import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import DropListField from "../../../../components/DropListField";
import InputField from "../../../../components/InputField";

export default function User_Conferences() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="USUARIO POR CONFERENCIA" />
        </div>
        <div className="row">
          <div className="col-10">
            <InputField
              label="Cedula"
              type="text"
              id="Cedula-Usuario-Conferencia"
              placeholder="Documento"
            />
          </div>
          <div className="col-10">
            <DropListField
              label="Conferencia"
              id=""
              selectOption="Seleciona conferencia "
            />
          </div>
          <div className="row">
            <div className="col-12">//grid</div>
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons title="Guardar" colorbutton="black" color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
