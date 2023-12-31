import React from "react";
import Swal from 'sweetalert2';

import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import DropListField from "../../../../components/DropListField";
import InputField from "../../../../components/InputField";

export default function User_Events() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="USUARIO POR EVENTO" />
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
              label="Evento"
              id=""
              selectOption="Seleciona evento"
            />
          </div>
          <div className="row">
            <div className="col-12">//grid</div>
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons
                title="Guardar"
                color="white"
                colorbutton="black"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
