import React, { useState, useEffect } from "react";
import Axios from 'axios'
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Modal from "react-modal";
import DropListField from "../../../../components/DropListField";

export default function Proyects() {

  //ESTE ESTADO ES EL GLOBAL PARA CONSULTAR TODAS LOS PROYECTOS
  const [proyects, setProyects] = useState([])

  /*useEffect(() => {
    // Coloca aquí la llamada a getProyect_Type
    getProyect_Type();
  }, []); // El segundo argumento es un arreglo de dependencias vacío
*/

  //FUNCION PARA CREAR LAS CONFERENCIAS QUE COPTURAMOS EN EL FORM

  //ESTA FUNCION ES PARA CAPTURAR LO QUE HAYA EN LAS SEDES
  const handleSedeChangeInput = (e) => {
    setSelectedSede(e.target.value);
  };





  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="PROYECTOS" />
        </div>
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
              //grid
            </div>
          </div>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons title="Guardar" color="white" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
