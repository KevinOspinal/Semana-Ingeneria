import React, { useState } from "react";
import Axios from 'axios'
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Grid_Conferences from "./Grid_Conferences";
import DropListField_Conferences from "./DropListField_Conferences";
import Modal from "react-modal";

export default function Conferences() {
    const [conferencesList, setConferencesList] = useState([]);
    const [editingConferencias, setEditingConferencias] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nombre, setNombre] = useState("");
    const [sede, setSede] = useState([]);
    const [cupo, setCupo] = useState(0);
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [estado, setEstado] = useState("");

    const handleNombreChange = (e) => {
        const updatedEditingConferencia = {
            ...editingConferencias,
            nombre: e.target.value,
        };
        setEditingConferencias(updatedEditingConferencia);
    };

    const handleSedeChange = (e) => {
        const updatedEditingConferencia = {
            ...editingConferencias,
            sede: e.target.value,
        };
        setEditingConferencias(updatedEditingConferencia);
    };

    const handleCupoChange = (e) => {
        const updatedEditingConferencia = {
            ...editingConferencias,
            cupo: e.target.value,
        };
        setEditingConferencias(updatedEditingConferencia);
    };

    const handleFechaChange = (e) => {
        const updatedEditingConferencia = {
            ...editingConferencias,
            fecha: e.target.value,
        };
        setEditingConferencias(updatedEditingConferencia);
    };

    const handleHoraChange = (e) => {
        const updatedEditingConferencia = {
            ...editingConferencias,
            hora: e.target.value,
        };
        setEditingConferencias(updatedEditingConferencia);
    };

    const handleEstadoChange = (e) => {
        const updatedEditingConferencia = {
            ...editingConferencias,
            estado: e.target.value,
        };
        setEditingConferencias(updatedEditingConferencia);
    };

    const openModal = (nombre) => {
        setEditingConferencias(nombre);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const createConferences = () => {
        Axios.post("http://localhost:3000/createConferences", {
            nombre: nombre,
            sede: sede,
            fecha: fecha,
            hora: hora,
            estado: estado
        }).then((responde) => {
            alert("Conferencia registrada.");
            getConferences();
        })
            .catch((error) => {
                console.log(error);
            });
    };

    const getConferences = () => {
        Axios.get("http://localhost:3000/getConferences").then((respond) => {
            setConferencesList(respond.data);
        });
    };

    const getOnlyConferences = (nombre) => {
        Axios.get(`http://localhost:3000/getOnlyConferences/${nombre}`).then((respond) => {
            setConferencesList(respond.data);
            console.log("conferencesList actualizada:", conferencesList);
        }
        );
    };

    const updateConferences = () => {
        Axios.put(
            `http://localhost:3000/updateConferences/${editingConferencias.id_conferencia}`,
            {
                nombre: editingConferencias.nombre,
                id_sede: editingConferencias.id_sede,
                fecha: editingConferencias.fecha,
                hora: editingConferencias.hora,
                estado: editingConferencias.estado
            }).then(() => {
                alert("Conferencia actializada.");
                getConferences();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3000/deleteConferences/${id}`)
            .then((response) => {
                alert("Conferencia eliminada satisfactoriamente!!");
                getConferences();
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="mb-5 d-flex justify-content-center">
                    <Title title="CONFERENCIAS" />
                </div>
                <div className="row">
                    <div className="col-10">
                        <InputField
                            label="Nombre"
                            type="text"
                            id="Nombre-Conferencias"
                            placeholder="Nombre de la conferencias"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="col-2">
                        <Buttons title="Consultar" color="white" onClick={() => (nombre.length === 0 ? getConferences() : getOnlyConferences(nombre))} />
                    </div>
                    <div className="col-10">
                        <DropListField_Conferences label='Sedes' onChange={(e) => setSede(e.target.value)} />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Cupo"
                            type="number"
                            id="Cupo-Conferencias"
                            placeholder="Cupo de la conferencias"
                            onChange={(e) => setCupo(e.target.value)}
                        />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Fecha"
                            type="date"
                            id="Fecha-Conferencias"
                            placeholder="Fecha de la conferencias"
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Hora"
                            type="time"
                            id="Hora-Conferencias"
                            placeholder="Hora de la conferencias"
                            onChange={(e) => setHora(e.target.value)}
                        />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Estado"
                            type="text"
                            id="Estado-Conferencias"
                            placeholder="Estado de la conferencias"
                            onChange={(e) => setEstado(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Grid_Conferences List={conferencesList} handleDelete={handleDelete} handleEdit={openModal} />
                        </div>
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Editar Conferencia"
                    >
                        <h2>Editar Tipo de Usuario</h2>
                        <div className="col-10">
                            <InputField
                                label="Nombre"
                                type="text"
                                id="Tipo-Nombre-Conferencia"
                                placeholder="Nombre de la conferencia"
                                value={editingConferencias.descipcion || ""}
                                onChange={handleNombreChange}
                            />
                        </div>
                        <div className="col-10">
                            <DropListField_Conferences label='Sedes' onChange={(e) => setSede(e.target.value)} />
                        </div>
                        <div className="col-10">
                            <InputField
                                label="Fecha"
                                type="date"
                                id="Fecha-Conferencia"
                                value={editingConferencias.fecha || ""}
                                onChange={handleFechaChange}
                            />
                        </div>
                        <div className="col-10">
                            <InputField
                                label="Hora"
                                type="time"
                                id="Hora-Conferencia"
                                value={editingConferencias.hora || ""}
                                onChange={handleHoraChange}
                            />
                        </div>
                        <div className="col-10">
                            <InputField
                                label="Estado"
                                type="text"
                                id="Estado-Conferencia"
                                placeholder="Estado de la conferencia"
                                value={editingConferencias.estado || ""}
                                onChange={handleEstadoChange}
                            />
                        </div>
                        <div className="container-fluid mt-4 d-flex justify-content-center">
                            <div className="col-4 d-flex justify-content-center">
                                <Buttons
                                    title="Guardar Cambios"
                                    color="white"
                                    onClick={updateConferences}
                                />
                            </div>
                        </div>
                        <button onClick={closeModal}>Cerrar</button>
                    </Modal>
                    <div className="container-fluid mt-4 d-flex justify-content-center">
                        <div className="col-4 d-flex justify-content-center">
                            <Buttons title="Guardar" color="white" onClick={createConferences} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
