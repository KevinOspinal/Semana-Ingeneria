import React, { useEffect, useState } from "react";
import Axios from "axios";
import Buttons from "../../components/Buttons";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Register({ showRegisterModal, closeModal }) {
    const { control, register, handleSubmit, setValue, formState: { errors } } = useForm(); // Configura el control del formulario
    const [optionsDropDocumento, setOptionsDropDocumento] = useState([]);
    const [optionsDropTipoUsuario, setOptionsDropTipoUsuario] = useState([]);
    const [optionsDropProgramas, setOptionsDropTipoPrograma] = useState([]);
    
    const { signup, isAuthenticated, isLogin, errors: registerErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {

            if (isAuthenticated.id_tipo_usuario == 1) return navigate('/Admin')
            if (isAuthenticated.id_tipo_usuario == 2) return navigate('/HomeUsers')

        const getDocumentType = async () => {
            try {
                const response = await Axios.get(
                    "http://localhost:3000/getDocument_Type"
                );
                setOptionsDropDocumento(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        //FUNCION PARA CONSULTAR TODAS LOS PROGRAMAS CREADOS
        const getTypeUser = async () => {
            try {
                const reponsed = await Axios.get("http://localhost:3000/getUserType");
                setOptionsDropTipoUsuario(reponsed.data);
            } catch (error) {
                console.error(error);
            }
        };
        const getPrograms = async () => {
            try {
                const reponsed = await Axios.get("http://localhost:3000/getPrograms");
                setOptionsDropTipoPrograma(reponsed.data);
            } catch (error) {
                console.error(error);
            }
        };
        getPrograms();
        getTypeUser();
        getDocumentType();
    }, [isAuthenticated]);


    return (
        <div
            className={`modal fade ${showRegisterModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{
                display: showRegisterModal ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <form
                onSubmit={handleSubmit(async (values) => {
                    console.log(values)
                    signup(values)
                })}>

                <div className="modal-dialog custom" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Registrate</h5>
                            <Buttons
                                title="&times;"
                                color="#002f59"
                                fontSize="15px"
                                colorbutton="#ffffff"
                                className="close"
                                onClick={closeModal}
                            />
                        </div>
                        <div className="container modal-body d-flex justify-content-center align-items-center">
                            <div className="row">
                                {
                                    registerErrors.map((error, i) => (
                                        <div className="d-flex justify-content-center text-white rounded" key={i} style={{ background: '#002f59' }}>
                                            {
                                                error
                                            }
                                        </div>
                                    ))
                                }
                                <div className="col-12 ">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label  style={{fontSize:'clamp(8px, 3vw, 15px)'}}  className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Tipo de documento
                                        </label>
                                        <div className="col-7 mx-auto">
                                            <Controller
                                                name="id_tipo_documento"
                                                control={control}
                                                defaultValue={null}
                                                render={({ field }) => (
                                                    <div>
                                                        <select
                                                            className="form-select mb-auto list border-black"
                                                            {...field}
                                                            onChange={(e) => {
                                                                const Documento = parseInt(e.target.value);
                                                                field.onChange(Documento);
                                                                setValue("id_tipo_documento", Documento);
                                                            }}
                                                        >
                                                            <option value="">Seleccionar Tipo de Documento</option>
                                                            {optionsDropDocumento.map((option) => (
                                                                <option
                                                                    key={option.id_tipo_documento}
                                                                    value={option.id_tipo_documento}
                                                                >
                                                                    {option.descripcion_tipo_documento}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {errors.Documento && (
                                                            <p className="text-warning bg-dark">
                                                                El tipo de documento es requerido
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label style={{fontSize:'clamp(8px, 3vw, 15px)'}} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Numero de Documento
                                        </label>
                                        <div className="col-7 mx-auto rounded border-black">
                                            <input
                                                type="text"
                                                {...register("documento", {
                                                    required: true
                                                })}
                                                className="form-control border-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    errors.documento && (
                                        <p className="text-warning bg-dark">
                                            El documento es requerido
                                        </p>
                                    )
                                }
                                <div className="col-12 ">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label style={{fontSize:'clamp(8px, 3vw, 15px)'}} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Tipo de usuario
                                        </label>
                                        <div className="col-7 mx-auto">
                                            <Controller
                                                name="id_tipo_usuario" // Cambia el nombre del campo
                                                control={control}
                                                defaultValue={null}
                                                render={({ field }) => (
                                                    <select
                                                        className="form-select mb-auto list border-black"
                                                        {...field}
                                                        onChange={(e) => {
                                                            const id_tipo_usuario = parseInt(e.target.value); // Convierte a número
                                                            field.onChange(id_tipo_usuario);
                                                            setValue("id_tipo_usuario", id_tipo_usuario);
                                                        }}
                                                    >
                                                        <option value="">Seleccionar Programa</option>
                                                        {optionsDropTipoUsuario.map((option) => (
                                                            <option
                                                                key={option.id_tipo_usuario}
                                                                value={option.id_tipo_usuario}
                                                            >
                                                                {option.descripcion_tipo_usuario}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 ">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label style={{fontSize:'clamp(8px, 3vw, 15px)'}} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Programa
                                        </label>
                                        <div className="col-7 mx-auto">
                                            <Controller
                                                name="id_programa" // Cambia el nombre del campo
                                                control={control}
                                                defaultValue={undefined}
                                                render={({ field }) => (
                                                    <select
                                                        className="form-select mb-auto list border-black"
                                                        {...field}
                                                        onChange={(e) => {
                                                            const id_programa = parseInt(e.target.value); // Convierte a número
                                                            field.onChange(id_programa);
                                                            setValue("id_programa", id_programa);
                                                        }}
                                                    >
                                                        <option value="">Seleccionar Programa</option>
                                                        {optionsDropProgramas.map((option) => (
                                                            <option
                                                                key={option.id_programa}
                                                                value={option.id_programa}
                                                            >
                                                                {option.nombre_programa}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    errors.id_programa && (
                                        <p className="text-warning bg-dark">
                                            El tipo de programa es requerido
                                        </p>
                                    )
                                }
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label style={{fontSize:'clamp(8px, 3vw, 15px)'}} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Nombres
                                        </label>
                                        <div className="col-7 mx-auto rounded border-black">
                                            <input
                                                type="text"
                                                {...register("nombres_usuario", { required: true })}
                                                className="form-control border-black"
                                                id="nombre_completo"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    errors.nombres_usuario && (
                                        <p className="text-warning bg-dark">
                                            Los nombre son requerido
                                        </p>
                                    )
                                }
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label style={{fontSize:'clamp(8px, 3vw, 15px)'}} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Apellidos
                                        </label>
                                        <div className="col-7 mx-auto rounded border-black">
                                            <input
                                                type="text"
                                                {...register("apellidos_usuario", { required: true })}
                                                className="form-control border-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    errors.apellidos_usuario && (
                                        <p className="text-warning bg-dark">
                                            Los apellidos son requeridos
                                        </p>
                                    )
                                }
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label style={{fontSize:'clamp(8px, 3vw, 15px)'}} className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Correo electrónico
                                        </label>
                                        <div className="col-7 mx-auto rounded border-black">
                                            <input
                                                type="email"
                                                {...register("correo", { required: true })}
                                                className="form-control border-black"
                                                id="correo"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    errors.correo && (
                                        <p className="text-warning bg-dark">
                                            El correo es requerido
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <Buttons
                                type="submit"
                                title="Regístrate"
                                color="#002f59"
                                fontSize="18px"
                                colorbutton="#ffffff"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
}
