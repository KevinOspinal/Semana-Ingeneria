import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
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
		// Coloca aquí la llamada a Faculties
		getFaculties();
	}, []); 



	//FUNCION PARA CREAR LOS PROGRAMAS QUE COPTURAMOS EN EL FORM

	//ESTA FUNCION ES PARA CAPTURAR LO QUE HAYA EN LAS FACULTADES
	const handleFacultadChangeInput = (e) => {
		setSelectedFacultad(e.target.value);
	};


	const [nombre_programa, setNombre] = useState("");
	const [selectedFacultad, setSelectedFacultad] = useState("");

	const createPrograms = () => {
		Axios.post("http://localhost:3000/createPrograms", {
		  nombre_programa: nombre_programa,
		  facultad: selectedFacultad,
		})
		  .then(() => {
			getPrograms();
			Swal.fire({
			  icon: 'success',
			  title: 'Éxito',
			  text: 'Programa registrado exitosamente.',
			});
		  })
		  .catch((error) => {
			console.error(error);
			Swal.fire({
			  icon: 'error',
			  title: 'Error',
			  text: 'Hubo un error al registrar el programa. Por favor, inténtelo de nuevo más tarde.',
			});
		  });
	  };
	  


// Función para consultar todos los programas creados y también para uno solo
const getPrograms = () => {
	Axios.get("http://localhost:3000/getPrograms")
	  .then((respond) => {
		setProgramsList(respond.data);
	  })
	  .catch((error) => {
		console.error(error);
		Swal.fire({
		  icon: 'error',
		  title: 'Error',
		  text: 'Hubo un error al obtener los programas. Por favor, inténtelo de nuevo más tarde.',
		});
	  });
  };
  
  const getOnlyPrograms = (nombre_programa) => {
	Axios.get(`http://localhost:3000/getOnlyPrograms/${nombre_programa}`)
	  .then((respond) => {
		setProgramsList(respond.data);
		console.log("ProgramsList actualizado");
	  })
	  .catch((error) => {
		console.error(error);
		Swal.fire({
		  icon: 'error',
		  title: 'Error',
		  text: 'Hubo un error al obtener el programa. Por favor, inténtelo de nuevo más tarde.',
		});
	  });
  };
  
  // Función para actualizar el programa
  const updatePrograms = () => {
	Axios.put(
	  `http://localhost:3000/updatePrograms/${editingProgramas.id_programa}`,
	  {
		nombre_programa: editingProgramas.nombre_programa,
		facultad: editingProgramas.id_facultad,
	  })
	  .then(() => {
		getPrograms();
		closeModal(); // Cierra el modal después de la actualización
		Swal.fire({
		  icon: 'success',
		  title: 'Éxito',
		  text: 'Programa actualizado exitosamente.',
		});
	  })
	  .catch((error) => {
		console.error(error);
		Swal.fire({
		  icon: 'error',
		  title: 'Error',
		  text: 'Hubo un error al actualizar el programa. Por favor, inténtelo de nuevo más tarde.',
		});
	  });
  };
  
  const handleDelete = (id) => {
	Swal.fire({
	  title: '¿Estás seguro?',
	  text: 'Esta acción eliminará el programa permanentemente.',
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Sí, eliminarlo',
	}).then((result) => {
	  if (result.isConfirmed) {
		Axios.delete(`http://localhost:3000/deletePrograms/${id}`)
		  .then(() => {
			getPrograms();
			Swal.fire({
			  icon: 'success',
			  title: 'Éxito',
			  text: 'Programa eliminado exitosamente.',
			});
		  })
		  .catch((error) => {
			console.error(error);
			Swal.fire({
			  icon: 'error',
			  title: 'Error',
			  text: 'Hubo un error al eliminar el programa. Por favor, inténtelo de nuevo más tarde.',
			});
		  });
	  }
	});
  };
  


	//ESTA FUNCION ES PARA CONSULTAR TODOS LOS PROGRAMADAS CREADOS
	const [optionsDrop, setOptionsDrop] = useState([]); // Estado para almacenar la FACULTAD seleccionada

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
						<Buttons title="Consultar" colorbutton='black' color="white"  onClick={() => (nombre_programa.length === 0 ? getPrograms() : getOnlyPrograms(nombre_programa))} />
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
								id="Nombre-Programa"
								placeholder="Nombre del Programa"
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
									colorbutton="black"
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