import React, { useState, useEffect } from "react";
import Axios from "axios";
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Grid_Other_Events from "./Grid_Other_Events";
import DropListField_Other_Events from "./DropListField_Other_Events copy";
import DropListField_Other_Events2 from "./DropListField_Other_Events2";
import Modal from "react-modal";
import axios from "axios";


export default function Other_Events() {
  //ESTE ESTADO ES EL GLOBAL PARA CONSULTAR TODAS LAS CONFENCIAS
  const [Other_EventsList, setOther_EventsList] = useState([]);

  useEffect(() => {
    // Coloca aquí la llamada a getHeadquarters
    getHeadquarters();
    getEvent_Type();
  }, []); // El segundo argumento es un arreglo de dependencias vacío

  //FUNCION PARA CREAR LAS CONFERENCIAS QUE COPTURAMOS EN EL FORM

  //ESTA FUNCION ES PARA CAPTURAR LO QUE HAYA EN LAS SEDES
  const handleSedeChangeInput = (e) => {
    setSelectedSede(e.target.value);
  };

  const handleTipoEventoChangeInput = (e) => {
    setSelectedTipoEvento(e.target.value);
  };

  const [nombre_evento, setNombre] = useState("");
  const [selectTipoEvento, setSelectedTipoEvento] = useState("");
  const [selectedSede, setSelectedSede] = useState("");
  const [cupo, setCupo] = useState(0);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [descripcion_otros_eventos, setDescripcion] = useState("");
  const [estado_evento, setEstado] = useState("");



  const createOther_Events = () => {
    Axios.post("http://localhost:3000/createOther_Events", {
      nombre_evento: nombre_evento,
      TipoEvento: selectTipoEvento,
      sede: selectedSede,
      cupo: cupo,
      fecha: fecha,
      hora: hora,
      descripcion_otros_eventos: descripcion_otros_eventos,
      estado_evento: estado_evento,
    })
      .then((responde) => {
        alert("Otros_eventos registrados.");
        getOther_Events();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //FUNCION PARA CONSULTAR TODAS LAS CONFERENCIAS CREADAS Y TAMBIEN PARA UNA SOLA
  const getOther_Events = () => {
    Axios.get("http://localhost:3000/getOther_Events").then((respond) => {
      setOther_EventsList(respond.data);
    });
  };

  const getOnlyOther_Events = (nombre_evento) => {
    Axios.get(`http://localhost:3000/getOnlyOther_Events/${nombre_evento}`).then(
      (respond) => {
        setOther_EventsList(respond.data);
        console.log("Otros_EventosList actualizada");
      }
    );
  };

  //FUNCION PARA ACTUALIZAR LA CONFERENCIA
  const updateOther_Events = () => {
    Axios.put(
      `http://localhost:3000/updateOther_Events/${editingotros_Eventos.id_otro_evento}`,
      {
        nombre_evento: editingotros_Eventos.nombre_evento,
        TipoEvento: editingotros_Eventos.id_tipo_evento,
        sede: editingotros_Eventos.id_sede,
        cupo: editingotros_Eventos.cupo,
        fecha: editingotros_Eventos.fecha,
        hora: editingotros_Eventos.hora,
        descripcion_otros_eventos: editingotros_Eventos.descripcion_otros_eventos,
        estado_evento: editingotros_Eventos.estado_evento,
      }
    )
      .then(() => {
        alert("Otros Eventos actializado.");
        getOther_Events();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //FUNCION PARA ELIMINAR UNA CONFERENCIA
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3000/deleteOther_Events/${id}`)
      .then((response) => {
        alert("Otros_Eventos eliminados satisfactoriamente!!");
        getOther_Events();
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //ESTA FUNCION ES PARA CONSULTAR TODAS LAS SEDES CREADAS
  const [optionsDrop, setOptionsDrop] = useState([]); // Estado para almacenar la SEDE seleccionado

  const getHeadquarters = () => {
    Axios.get("http://localhost:3000/getHeadquarters").then((respond) => {
      setOptionsDrop(respond.data);
    });
  };

  const [optionsDrop2, setOptionsDrop2] = useState([]);

  const getEvent_Type = () =>{
    axios.get("http://localhost:3000/getEvent_Type").then((respond) => {
      setOptionsDrop2(respond.data);
    });
  }

  //Estas funciones onChame es para capturar los datos del MODAL EDITAR

  const [editingotros_Eventos, setEditingotros_Eventos] = useState({});

  const handleNombreChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      nombre_evento: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };

  const handleTipoEventoChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      id_tipo_evento: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };

  const handleSedeChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      id_sede: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };

  const handleCupoChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      cupo: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };

  const handleFechaChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      fecha: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };

  const handleHoraChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      hora: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };


  const handleDescripcionChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      descripcion_otros_eventos: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };

  const handleEstadoChange = (e) => {
    const updatedEditingotros_Eventos = {
      ...editingotros_Eventos,
      estado_evento: e.target.value,
    };
    setEditingotros_Eventos(updatedEditingotros_Eventos);
  };

  //ESTAAS FUNCIONES SON PARA ABRIR Y CERRAR LA VENTANA EMERGENTE(MODAL)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (Otros_Eventos) => {
    setEditingotros_Eventos(Otros_Eventos);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <Title title="Otros Eventos" />
        </div>
        <div className="row">
          <div className="col-10">
            <InputField
              label="Nombre"
              type="text"
              id="Nombre-evento"
              placeholder="Nombre Evento"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="col-2">
            <Buttons
              title="Consultar"
              colorbutton="black"
              color="white"
              onClick={() =>
                nombre_evento.length === 0
                  ? getOther_Events()
                  : getOnlyOther_Events(nombre_evento)
              }
            />
          </div>
          <div className="col-10">
            <DropListField_Other_Events2
              selectTipoEvento={selectTipoEvento}
              handleChange={handleTipoEventoChangeInput}
              options={optionsDrop2}
            />
          </div>
          <div className="col-10">
            <DropListField_Other_Events
              selectSedes={selectedSede}
              handleChange={handleSedeChangeInput}
              options={optionsDrop}
            />
          </div>
          <div className="col-10">
            <InputField
              label="Cupo"
              type="number"
              id="Cupo-Otros_Eventos"
              placeholder="Cupo de Otros Eventos"
              onChange={(e) => setCupo(e.target.value)}
            />
          </div>
          <div className="col-10">
            <InputField
              label="Fecha"
              type="date"
              id="Fecha-Otros_Eventos"
              placeholder="Fecha de Otros Eventos"
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="col-10">
            <InputField
              label="Hora"
              type="time"
              id="Hora-Otros_Eventos"
              placeholder="Hora de Otros Eventos"
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
          <div className="col-10">
            <InputField
              label="Descripcion"
              type="text"
              id="descripcion_otros_eventos"
              placeholder="Descripcion de Otros Eventos"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="col-10">
            <InputField
              label="Estado"
              type="text"
              id="Estado-Otros_Eventos"
              placeholder="Estado de la conferencia"
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <Grid_Other_Events
                List={Other_EventsList}
                handleDelete={handleDelete}
                handleEdit={openModal}
              />
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Editar Otros Eventos"
          >
            <h2>Editar Conferencia</h2>
            <div className="col-10">
              <InputField
                label="Nombre"
                type="text"
                id="Nombre-Evento"
                placeholder="Nombre de Otros Eventos"
                value={editingotros_Eventos.nombre_evento || ""}
                onChange={handleNombreChange}
              />
            </div>
            <div className="col-10">
              <DropListField_Other_Events2
                handleChange={handleTipoEventoChange}
                options={optionsDrop2}
                selectTipoEvento={editingotros_Eventos.id_tipo_evento}
              />
            </div>
            <div className="col-10">
              <DropListField_Other_Events
                handleChange={handleSedeChange}
                options={optionsDrop}
                selectSedes={editingotros_Eventos.id_sede}
              />
            </div>
            <div className="col-10">
              <InputField
                label="Cupo"
                type="number"
                id="Cupo-Otros_Eventos"
                value={editingotros_Eventos.cupo || ""}
                onChange={handleCupoChange}
              />
            </div>
            <div className="col-10">
              <InputField
                label="Fecha"
                type="date"
                id="Fecha-Otros_Eventos"
                value={editingotros_Eventos.fecha || ""}
                onChange={handleFechaChange}
              />
            </div>
            <div className="col-10">
              <InputField
                label="Hora"
                type="time"
                id="Hora-Otros_Eventos"
                value={editingotros_Eventos.hora || ""}
                onChange={handleHoraChange}
              />
            </div>
            <div className="col-10">
              <InputField
                label="Descripcion"
                type="text"
                id="Descripcion-Otros_Eventos"
                placeholder="Descripcion de Otros Eventos"
                value={editingotros_Eventos.descripcion_otros_eventos || ""}
                onChange={handleDescripcionChange}
              />
            </div>
            <div className="col-10">
              <InputField
                label="Estado"
                type="text"
                id="Estado-Otros_Eventos"
                placeholder="Estado de Otros_Eventos"
                value={editingotros_Eventos.estado_evento || ""}
                onChange={handleEstadoChange}
              />
            </div>
            <div className="container-fluid mt-4 d-flex justify-content-center">
              <div className="col-4 d-flex justify-content-center">
                <Buttons
                  title="Guardar Cambios"
                  color="white"
                  colorbutton="black"
                  onClick={updateOther_Events}
                />
              </div>
            </div>
            <button onClick={closeModal}>Cerrar</button>
          </Modal>
          <div className="container-fluid mt-4 d-flex justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <Buttons
                title="Guardar"
                color="white"
                onClick={createOther_Events}
                colorbutton="black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
