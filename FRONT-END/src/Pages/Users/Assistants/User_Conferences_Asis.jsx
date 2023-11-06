import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import Swal from 'sweetalert2';

import Buttons from "../../../components/Buttons";
import Title from "../../../components/Title";
import Grid_User_Conference_Asis from "./Grid_User_Conference_Asis";

export default function User_Conferences_Asis() {
  const { control, register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [optionsDropConferencias, setOptionsDropConferencias] = useState([]);
  const [conferencesList, setConferencesList] = useState([]);
  const [data, setData] = useState();

  


  const getOnlyConferencesAsis = (id_conferencia, documento) => {
    Axios.get(`http://localhost:3000/getOnlyUserConferencesAsis/${id_conferencia}?documento=${documento}`)
      .then((response) => {
        setConferencesList(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario por conferencia registrada exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al obtener las conferencias. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };

  const updateUserConferencesAsis = (id) => {
    console.log('id:', id)
    Axios.put(
      `http://localhost:3000/updateUserConferencesAsis/${id}`)
      .then(() => {
        const { id_conferencia, documento } = data;
        getOnlyConferencesAsis(id_conferencia, documento)
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Conferencia actualizada exitosamente.',
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al actualizar la conferencia. Por favor, inténtelo de nuevo más tarde.',
        });
      });
  };


  useEffect(() => {
    const getConferences = async () => {
      try {
        const response = await Axios.get("http://localhost:3000/getConferences");
        setOptionsDropConferencias(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getConferences();
  }, []);


  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="row">
          <div className="mb-5 d-flex justify-content-center">
            <Title title="USUARIO POR CONFERENCIAS" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit( (values) => {
            console.log(values)
            setData(values)
            const { id_conferencia, documento } = values;
            getOnlyConferencesAsis(id_conferencia, documento);
          })}>
          <div className="container modal-body d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-12 ">
                <div className="mb-3 d-flex align-items-center">
                  <label style={{ fontSize: 'clamp(8px, 3vw, 15px)' }} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                    Conferencia
                  </label>
                  <div className="col-7 mx-auto">
                    <Controller
                      name="id_conferencia"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <div>
                          <select
                            className="form-select mb-auto list border-black"
                            {...field}
                            onChange={(e) => {
                              const Conferencias = parseInt(e.target.value);
                              field.onChange(Conferencias);
                              setValue("id_conferencia", Conferencias);
                            }}
                          >
                            <option value="">Seleccionar la Conferencia</option>
                            {optionsDropConferencias.map((option) => (
                              <option
                                key={option.id_conferencia}
                                value={option.id_conferencia}
                              >
                                {option.nombre_conferencia}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3 d-flex align-items-center">
                  <label style={{ fontSize: 'clamp(8px, 3vw, 15px)' }} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                    Documento
                  </label>
                  <div className="col-7 mx-auto rounded border-black">
                    <input
                      type="text"
                      {...register("documento", {
                        required: true
                      })}
                      className="form-control border-black"
                    />
                  </div>
                </div>
              </div>
              {
                errors.documento && (
                  <p className="text-warning bg-dark">
                    El documento es requerido
                  </p>
                )
              }
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <Buttons
              type="submit"
              title="Consultar"
              color="#002f59"
              fontSize="18px"
              colorbutton="#ffffff"
            />
          </div>
        </form>
        <div className="row">
          <div className="col-12">
            <Grid_User_Conference_Asis List={conferencesList} handleEdit={updateUserConferencesAsis} />
          </div>
        </div>
      </div>
    </div>
  );
}
