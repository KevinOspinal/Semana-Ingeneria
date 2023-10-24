import React, { useState, useEffect } from "react";
import Axios from 'axios'
import InputField from "../../../../components/InputField";
import Title from "../../../../components/Title";
import Buttons from "../../../../components/Buttons";
import Grid_Programs from "./Grid_Programs";
import DropListField_Programs from "./DropListField_Programs";
import Modal from "react-modal";

export default function Programs() {
	//ESTE ESTADO ES EL GLOBAL PARA CONSULTAR TODAS LAS CONFENCIAS
	const [ProgramsList, setProgramsList] = useState([]);



	useEffect(() => {
		// Coloca aquí la llamada a getHeadquarters
		getFaculties();
	}, []); // El segundo argumento es un arreglo de dependencias vacío



	//FUNCION PARA CREAR LAS CONFERENCIAS QUE COPTURAMOS EN EL FORM

	//ESTA FUNCION ES PARA CAPTURAR LO QUE HAYA EN LAS SEDES
	const handleFacultadChangeInput = (e) => {
		setSelectedFacultad(e.target.value);
	};


	const [nombre, setNombre] = useState("");
	const [selectedFacultad, setSelectedFacultad] = useState("");

	const createPrograms = () => {
		Axios.post("http://localhost:3000/createPrograms", {
			nombre: nombre,
			sede: selectedFacultad,
		}).then((responde) => {
			alert("Conferencia registrada.");
			getPrograms();
		})
			.catch((error) => {
				console.log(error);
			});
	};




	//FUNCION PARA CONSULTAR TODAS LAS CONFERENCIAS CREADAS Y TAMBIEN PARA UNA SOLA
	const getPrograms = () => {
		Axios.get("http://localhost:3000/getPrograms").then((respond) => {
			setProgramsList(respond.data);
		});
	};

	const getOnlyPrograms = (nombre) => {
		Axios.get(`http://localhost:3000/getOnlyConferences/${nombre}`).then((respond) => {
			setProgramsList(respond.data);
			console.log("conferencesList actualizada");
		}
		);
	};




	//FUNCION PARA ACTUALIZAR LA CONFERENCIA
	const updatePrograms= () => {
		Axios.put(
			`http://localhost:3000/updatePrograms/${editingProgramas.id_programa}`,
			{
				nombre: editingProgramas.nombre_programa,
				facultad : editingProgramas.id_facultad,
			}).then(() => {
				alert("Conferencia actializada.");
				getPrograms();
			})
			.catch((error) => {
				console.error(error);
			});
	};



	//FUNCION PARA ELIMINAR UNA CONFERENCIA
	const handleDelete = (id) => {
		Axios.delete(`http://localhost:3000/deletePrograms/${id}`)
			.then((response) => {
				alert("Conferencia eliminada satisfactoriamente!!");
				getPrograms();
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};



	//ESTA FUNCION ES PARA CONSULTAR TODAS LAS SEDES CREADAS
	const [optionsDrop, setOptionsDrop] = useState([]); // Estado para almacenar la SEDE seleccionado

	const getFaculties = () => {
		Axios.get('http://localhost:3000/getFaculties').then((respond) => {
			setOptionsDrop(respond.data)
		})
	}




	//Estas funciones onChame es para capturar los datos del MODAL EDITAR

	const [editingProgramas, setEditingProgramas] = useState({});

	const handleNombreChange = (e) => {
		const updatedEditingProgramas = {
			...editingProgramas,
			nombre_programa: e.target.value,
		};
		setEditingProgramas(updatedEditingProgramas);
	};

	const handleFacultadChange = (e) => {
		const updatedEditingProgramas = {
			...editingProgramas,
			id_facultad: e.target.value,
		};
		setEditingProgramas(updatedEditingProgramas);
	};



	//ESTAAS FUNCIONES SON PARA ABRIR Y CERRAR LA VENTANA EMERGENTE(MODAL)
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (programas) => {
		setEditingProgramas(programas);
		setIsModalOpen(true);
	};


	const closeModal = () => {
		setIsModalOpen(false);
	};

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
							placeholder="Nombre del Programa"
							onChange={(e) => setNombre(e.target.value)}
						/>
					</div>
					<div className="col-2">
						<Buttons title="Consultar" colorbutton='black' color="white"  onClick={() => (nombre.length === 0 ? getPrograms() : getOnlyPrograms(nombre))} />
					</div>
					<div className="col-10">
						<DropListField_Programs selectFacultades={selectedFacultad} handleChange={handleFacultadChangeInput} options={optionsDrop} />
					</div>
					<div className="row">
						<div className="col-12">
							<Grid_Programs List={ProgramsList} handleDelete={handleDelete} handleEdit={openModal} />
						</div>
					</div>
					<Modal
						isOpen={isModalOpen}
						onRequestClose={closeModal}
						contentLabel="Editar Programa"
					>
						<h2>Editar Programa</h2>
						<div className="col-10">
							<InputField
								label="Nombre"
								type="text"
								id="Nombre-Conferencia"
								placeholder="Nombre de la conferencia"
								value={editingProgramas.nombre_programa || ""}
								onChange={handleNombreChange}
							/>
						</div>
						<div className="col-10">
							<DropListField_Programs handleChange={handleFacultadChange} options={optionsDrop} selectFacultades={editingProgramas.id_facultad} />
						</div>
						<div className="container-fluid mt-4 d-flex justify-content-center">
							<div className="col-4 d-flex justify-content-center">
								<Buttons
									title="Guardar Cambios"
									color="white"
									onClick={updatePrograms}
								/>
							</div>
						</div>
						<button onClick={closeModal}>Cerrar</button>
					</Modal>
					<div className="container-fluid mt-4 d-flex justify-content-center">
						<div className="col-4 d-flex justify-content-center">
							<Buttons title="Guardar" color="white" onClick={createPrograms}  colorbutton='black' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}