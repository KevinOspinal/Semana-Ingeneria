import React from 'react'
import Title from '../../../components/Title'
import DropListField from '../../../components/DropListField'
import InputField from '../../../components/InputField'
import Buttons from '../../../components/Buttons'
import Grid_Muestra from '../../../components/Grid_Muestra'
export default function Other_Events() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="OTROS EVENTOS" />
        </div>
        <form method="POST" action="/Other_Events">
          <div className="row">
            <div className="col-10">
              <DropListField
                label="Tipo de evento"
                id=""
                selectOption="Seleccione un evento"
              />
            </div>
            <div className="col-10">
              <DropListField
                label="Sede"
                id=""
                selectOption="Seleccione una sede"
              />
            </div>
            <div className="col-10">
              <InputField
                label="Cupo"
                type="Number"
                id="Cupo-Otros-Eventos"
                placeholder="Cupo disponible"
              />
            </div>
            <div className="col-10">
              <InputField label="Fecha" type="date" id="Fecha-Otros-Eventos" />
            </div>
            <div className="col-10">
              <InputField label="Hora" type="time" id="Hora-Otros-Eventos" />
            </div>
            <div className="col-10">
              <InputField
                label="Estado"
                type="text"
                id="Estado-Otros-Eventos"
                placeholder="Estado del evento"
              />
            </div>
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
        </form>
      </div>
<<<<<<< HEAD
      <form/>
<<<<<<< HEAD
    </div>
  );
}
=======
=======
>>>>>>> main
    </div>
  );
}
>>>>>>> main
