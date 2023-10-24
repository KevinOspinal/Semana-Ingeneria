import React from "react";
import InputField from "../../components/InputField";
import DropListField from "../../components/DropListField";
import Buttons from "../../components/Buttons";

export default function Register({showRegisterModal,closeModal}) {
    return (
        <div
            className={`modal fade ${showRegisterModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{
                display: showRegisterModal ? "flex" : "none",
                alignItems: "center",
            }}
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
    );
}
