import React from "react";
import Swal from 'sweetalert2';

import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import DropListField from "../../../../components/DropListField";
import InputField from '../../../../components/InputField'

export default function Project_User() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="USUARIO POR PROYECTO" />
        </div>
          <div className="row">
            <div className="col-10">
              <InputField label='Documento usuario' type='text' placeholder='Numero de identificacion' />
            </div>
            <div className="col-10">
              <DropListField
                label="Proyecto"
                id=""
                selectOption="Seleciona proyecto"
              />
            </div>
            <div className="col-10">
              <DropListField
                label="Rol"
                id=""
                selectOption="Seleciona Rol en Proyecto"
              />
            </div>
            <div className="row">
              <div className="col-12">
                //grid
              </div>
            </div>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons title="Guardar" color="white" colorbutton='black' type="submit" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
