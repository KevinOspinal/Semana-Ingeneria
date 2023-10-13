import React,{useState} from 'react'
import Title from '../../../../components/Title'
import InputField from '../../../../components/InputField'
import Buttons from '../../../../components/Buttons'
import Grid_Project_Type from './Grid_Project_Type'
import Axios from 'axios'





export default function Project_Type() {

  //ESTADO DONDE GUARDAMOS LA CONSULTA DE LOS TIPOS PROYECTOS
  const [ProyectTypeList, setProyectTypeList] = useState([])


	const [descripcion, setDescripcion] = useState("");

	const createConferences = () => {
		Axios.post("http://localhost:3000/createProject_Type", {
			nombre: descripcion
		}).then((responde) => {
			alert("Conferencia registrada.");
		})
			.catch((error) => {
				console.log(error);
			});
	};


  const getProyect_Type = () => {
		Axios.get('http://localhost:3000/getProject_Type').then((respond) => {
      setProyectTypeList(respond.data)
		})
	}





  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center'>
      <div className='row'>
          <div className='mb-5 d-flex justify-content-center'>
            <Title title='TIPO DE PROYECTO' />
          </div>
          <div className='row'>
            <div className='col-10'>
              <InputField label='Nombre' type='text' id='Nombre' placeholder='Nombre' />
            </div>
            <div className='col-2'>
              <Buttons title='Consultar' color='white' onClick={() => getProyect_Type()} />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
            <Grid_Project_Type List={ProyectTypeList}/>
            </div>
          </div>
          <div className='container-fluid mt-4 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
              <Buttons title='Guardar' color='white' />
            </div>
          </div>
      </div>
    </div>
  );
}