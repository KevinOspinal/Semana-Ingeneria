import React from 'react'
import Context from './Context'

export default function Admin() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-sm-4 col-md-3 col-lg-2 d-md-block bg-light sidebar vh-100 p-0">
          <div className="position-sticky">
            <ul className="nav flex-column fs-5">
              <li className="nav-item mb-2">
                <a className="nav-link active bg-white text-dark">
                  ADMINISTRADOR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Tipo Documento</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Tipo Usuario</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Tipo de proyecto</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Tipo Evento</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Sedes</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Programas</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Facultades</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Proyectos</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Conferencias</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Proyectos</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Usuarios por proyecto</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Rol por proyecto</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Usuarios por conferencia</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  <span>Usuarios por Evento</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Context/>
      </div>
    </div>
  )
}