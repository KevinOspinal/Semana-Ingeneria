import "../NavbarUser/NavbarUser.css";
import { useAuth } from '../../../Context/AuthContext'
import {Link} from 'react-router-dom'
import Logo from "../../../assets/img/logo_unicatolica.png";
import { useState,useEffect } from "react";

export default function NavbarUser() {

    const {logout, user} = useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-toggler"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-toggler">
                    <a className="navbar-brand">
                        <img src={Logo} alt="logo unicatolica" style={{ height: "38pt" }} />
                    </a>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link mb-2"
                                href="#confenrencias"
                                aria-current="page"
                            >
                                CONFERENCIAS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mb-2" href="#eventos" aria-current="page">
                                EVENTOS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link mb-2"
                                href="#proyectos"
                                aria-current="page"
                            >
                                PROYECTOS
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">
                                {user.nombres}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link to='/' onClick={() => {
                                    logout()
                                }} style={{textDecoration:'none', color:'inherit'}}>Cerrar Sesion</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}