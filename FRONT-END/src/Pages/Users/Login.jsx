import React from 'react'
import InputField from "../../components/InputField";
import Buttons from "../../components/Buttons";

export default function Login({showLoginModal,closeModal}) {
    return (
        <div
            className={`modal fade ${showLoginModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: showLoginModal ? "flex" : "none", alignItems: 'center' }}
        >
            <div className="modal-dialog custom" role="document">
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
                        <Buttons title='Iniciar' color='#002f59' fontSize='18px' colorbutton='#ffffff' />
                    </div>
                </div>
            </div>
        </div>
    )
}
