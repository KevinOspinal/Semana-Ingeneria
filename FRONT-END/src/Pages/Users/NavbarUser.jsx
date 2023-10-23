import React, { useState } from "react";
import "./NavbarUser.css";
import Logo from "../../assets/img/Logo_Unicatólica.png";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "../../components/InputField";
import DropListField from "../../components/DropListField";
import Buttons from "../../components/Buttons";
export default function NavbarUser() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const openRegisterModal = () => {
        setShowRegisterModal(true);
    };

    const closeModal = () => {
        setShowLoginModal(false);
        setShowRegisterModal(false);
    };

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
                            <a className="nav-link" onClick={openLoginModal}>
                                Iniciar sesión
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={openRegisterModal}>
                                Registrarme
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal de Iniciar Sesión */}
            <div
                className={`modal fade ${showLoginModal ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: showLoginModal ? "block" : "none" }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Iniciar Sesión</h5>
                            <Buttons title='&times;' color='#002f59' fontSize='15px' colorbutton='#ffffff' className="close" onClick={closeModal} />
                        </div>
                        <div className="container modal-body d-flex justify-content-center align-items-center">
                            <div className="row">
                                <div className="col-12">
                                    <InputField label="Usuario" type="text" />
                                </div>
                                <div className="col-12">
                                    <InputField label="Contraseña" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <Buttons title='Registrate' color='#002f59' fontSize='18px' colorbutton='#ffffff' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Registrarse */}
            <div
                className={`modal fade ${showRegisterModal ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: showRegisterModal ? "block" : "none" }}
            >
                <div className="modal-dialog custom" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Registrate</h5>
                            <Buttons title='&times;' color='#002f59' fontSize='15px' colorbutton='#ffffff' className="close" onClick={closeModal} />
                        </div>
                        <div className="container modal-body d-flex justify-content-center align-items-center">
                            <div className="row">
                                <div className="col-12 ">
                                    <DropListField label="Tipo de documento" />
                                </div>
                                <div className="col-12">
                                    <InputField label="Numero completo" type="text" />
                                </div>
                                <div className="col-12">
                                    <InputField label="Nombre Completo" type="text" />
                                </div>
                                <div className="col-12">
                                    <InputField label="Correo Electronico" type="email" />
                                </div>
                                <div className="col-12">
                                    <DropListField label="Tipo Usuario" />
                                </div>
                                <div className="col-12">
                                    <DropListField label="Programa" />
                                </div>
                                <div className="col-12">
                                    <InputField label="Contraseña" type="password" />
                                </div>
                                <div className="col-12">
                                    <InputField label="Confirmar contraseña" type="password" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <Buttons title='Registrate' color='#002f59' fontSize='18px' colorbutton='#ffffff' />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

