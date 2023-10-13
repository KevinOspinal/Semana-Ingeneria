import React, { useState, useEffect } from "react";
import Axios from 'axios'
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Grid_Conferences from "./Grid_Conferences";
import DropListField_Conferences from "./DropListField_Conferences";
import Modal from "react-modal";

export default function Conferences() {
	//ESTE ESTADO ES EL GLOBAL PARA CONSULTAR TODAS LAS CONFENCIAS
	const [conferencesList, setConferencesList] = useState([]);



	useEffect(() => {
		// Coloca aquí la llamada a getHeadquarters
		getHeadquarters();
	}, []); // El segundo argumento es un arreglo de dependencias vacío



	//FUNCION PARA CREAR LAS CONFERENCIAS QUE COPTURAMOS EN EL FORM

	//ESTA FUNCION ES PARA CAPTURAR LO QUE HAYA EN LAS SEDES
	const handleSedeChangeInput = (e) => {
		setSelectedSede(e.target.value);
	};


	const [nombre, setNombre] = useState("");
	const [selectedSede, setSelectedSede] = useState("");
	const [cupo, setCupo] = useState(0);
	const [fecha, setFecha] = useState("");
	const [hora, setHora] = useState("");
	const [estado, setEstado] = useState("");

	const createConferences = () => {
		Axios.post("http://localhost:3000/createConferences", {
			nombre: nombre,
			sede: selectedSede,
			cupo: cupo,
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




	//FUNCION PARA CONSULTAR TODAS LAS CONFERENCIAS CREADAS Y TAMBIEN PARA UNA SOLA
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




	//FUNCION PARA ACTUALIZAR LA CONFERENCIA
	const updateConferences = () => {
		console.log('id:', editingConferencias.id_conferencia);
		console.log('Nombre:', editingConferencias.descipcion);
		console.log('Sede:', editingConferencias.id_sede);
		console.log('Cupo:', editingConferencias.cupo);
		console.log('Fecha:', editingConferencias.fecha);
		console.log('Hora:', editingConferencias.hora);
		console.log('Estado:', editingConferencias.estado_conferencia);

		Axios.put(
			`http://localhost:3000/updateConferences/${editingConferencias.id_conferencia}`,
			{
				nombre: editingConferencias.descipcion,
				sede: editingConferencias.id_sede,
				cupo: editingConferencias.cupo,
				fecha: editingConferencias.fecha,
				hora: editingConferencias.hora,
				estado: editingConferencias.estado_conferencia
			}).then(() => {
				alert("Conferencia actializada.");
				getConferences();
			})
			.catch((error) => {
				console.error(error);
			});
	};



	//FUNCION PARA ELIMINAR UNA CONFERENCIA
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



	//ESTA FUNCION ES PARA CONSULTAR TODAS LAS SEDES CREADAS
	const [optionsDrop, setOptionsDrop] = useState([]); // Estado para almacenar la SEDE seleccionado

	const getHeadquarters = () => {
		Axios.get('http://localhost:3000/getHeadquarters').then((respond) => {
			setOptionsDrop(respond.data)
		})
	}




	//Estas funciones onChame es para capturar los datos del MODAL EDITAR

	const [editingConferencias, setEditingConferencias] = useState({});

	const handleNombreChange = (e) => {
		const updatedEditingConferencia = {
			...editingConferencias,
			descipcion: e.target.value,
		};
		setEditingConferencias(updatedEditingConferencia);
	};

	const handleSedeChange = (e) => {
		const updatedEditingConferencia = {
			...editingConferencias,
			id_sede: e.target.value,
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
			estado_conferencia: e.target.value,
		};
		setEditingConferencias(updatedEditingConferencia);
	};





	//ESTAAS FUNCIONES SON PARA ABRIR Y CERRAR LA VENTANA EMERGENTE(MODAL)
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (conferencias) => {
		setEditingConferencias(conferencias);
		setIsModalOpen(true);
	};


	const closeModal = () => {
		setIsModalOpen(false);
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
						<DropListField_Conferences selectSedes={selectedSede} handleChange={handleSedeChangeInput} options={optionsDrop} />
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
						<h2>Editar Conferencia</h2>
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
							<DropListField_Conferences handleChange={handleSedeChange} options={optionsDrop} selectSedes={editingConferencias.id_sede} />
						</div>
						<div className="col-10">
							<InputField
								label="Cupo"
								type="number"
								id="Cupo-Conferencia"
								value={editingConferencias.cupo || ""}
								onChange={handleCupoChange}
							/>
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
								value={editingConferencias.estado_conferencia || ""}
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