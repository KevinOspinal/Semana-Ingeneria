import React,{useState} from 'react'
import './Admin.css'

import Context from './Context'
import Conferences from './Pages-Admin/Conferences';
import Document_Types from './Pages-Admin/Document_Types';
import Event_Type from './Pages-Admin/Event_Type'
import Faculties from './Pages-Admin/Faculties'
import Headquarters from './Pages-Admin/Headquarters'
import Other_Events from './Pages-Admin/Other_Events'
import Programs from './Pages-Admin/Programs'
import Project_Role from './Pages-Admin/Project_Role'
import Project_Type from './Pages-Admin/Project_Type'
import Project_User from './Pages-Admin/Project_User'
import User_Events from './Pages-Admin/User_Events'
import User_Type from './Pages-Admin/User_Type'
import Proyects from './Pages-Admin/Proyects';
import User_Conferences from './Pages-Admin/User_Conferences';




export default function Admin() {

    const [currentView, setCurrentView] = useState("");
    const [open, setOpen] = useState(false);

    
    // Función para cambiar la vista del Context
    const showPagesContext = (componente) => {
      setCurrentView(componente);
    };


    const componentsContext = {
      Headquarters: <Headquarters />,
      Programas: <Programs />,
      Conferences: <Conferences />,
      Document_type: <Document_Types />,
      Event_Types: <Event_Type />,
      Faculties: <Faculties />,
      Other_Events: <Other_Events />,
      Project_Role: <Project_Role />,
      Proyect_Type: <Project_Type />,
      Proyect_User: <Project_User />,
      User_Events: <User_Events />,
      User_Type: <User_Type />,
      Proyects: <Proyects/>,
      User_Conferences: <User_Conferences/>
    };
  

  return (
    <div className="container-fluid">
      <div className="row">
      <nav id="sidebar" className='col-md-3 col-lg-2 d-md-block bg-light sidebar p-0'>
          <div className="position-sticky">
            <ul className="nav flex-column fs-5">
              <li className="nav-item">
                <a className="nav-link nav-admin active bg-white text-dark">
                  ADMINISTRADOR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Document_type')} >
                  <span>Tipo Documento</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('User_Type')}>
                  <span>Tipo Usuario</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Proyect_Type')} >
                  <span>Tipo de proyecto</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Event_Types')}>
                  <span>Tipo Evento</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Headquarters')}>
                  <span>Sedes</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Programas')}>
                  <span>Programas</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Faculties')}>
                  <span>Facultades</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Conferences')}>
                  <span>Conferencias</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Proyects')}>
                  <span>Proyectos</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Proyect_User')}>
                  <span>Usuarios por proyecto</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Project_Role')}>
                  <span>Rol por proyecto</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('User_Conferences')}>
                  <span>Usuarios por conferencia</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('User_Events')}>
                  <span>Usuarios por Evento</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" onClick={() => showPagesContext('Other_Events')}>
                  <span>Otros Eventos</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Context componentPage={componentsContext} stadePage={currentView}/>
      </div>
    </div>
  )
}