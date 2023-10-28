import React, { useEffect, useState } from "react";
import Axios from "axios";
import Buttons from "../../components/Buttons";
import { useForm, Controller } from "react-hook-form";
import { registerRequest } from "../../api/auth";


export default function Register({ showRegisterModal, closeModal }) {
    const { control, register, handleSubmit, setValue } = useForm(); // Configura el control del formulario
    const [optionsDropDocumento, setOptionsDropDocumento] = useState([]);
    const [optionsDropTipoUsuario, setOptionsDropTipoUsuario] = useState([]);
    const [optionsDropProgramas, setOptionsDropTipoPrograma] = useState([]);

    useEffect(() => {
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
    }, []);


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
                    const res = await registerRequest(values)
                    console.log(res)
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
                                <div className="col-12 ">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Tipo de documento
                                        </label>
                                        <div className="col-7 mx-auto">
                                            <Controller
                                                name="id_tipo_documento" // Cambia el nombre del campo
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <select
                                                        className="form-select mb-auto list border-black"
                                                        {...field}
                                                        onChange={(e) => {
                                                            const numericValue = parseInt(e.target.value); // Convierte a número
                                                            field.onChange(numericValue);
                                                            setValue("id_tipo_documento", numericValue);
                                                        }}
                                                    >
                                                        <option value="">Seleccionar Programa</option>
                                                        {optionsDropDocumento.map((option) => (
                                                            <option
                                                                key={option.id_tipo_documento}
                                                                value={option.id_tipo_documento}
                                                            >
                                                                {option.descripcion_tipo_documento}
                                                            </option>
                                                        ))}
                                                    </select>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="col-sm-4 col-lg-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Numero de Documento
                                        </label>
                                        <div className="col-sm-5 col-lg-7 mx-auto rounded border-black">
                                            <input
                                                type="text"
                                                {...register("documento", { required: true })}
                                                className="form-control border-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Tipo de usuario
                                        </label>
                                        <div className="col-7 mx-auto">
                                            <Controller
                                                name="id_tipo_usuario" // Cambia el nombre del campo
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <select
                                                        className="form-select mb-auto list border-black"
                                                        {...field}
                                                        onChange={(e) => {
                                                            const numericValue = parseInt(e.target.value); // Convierte a número
                                                            field.onChange(e);
                                                            setValue("id_tipo_usuario", numericValue);
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
                                        <label className="col-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Programa
                                        </label>
                                        <div className="col-7 mx-auto">
                                            <Controller
                                                name="id_programa" // Cambia el nombre del campo
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <select
                                                        className="form-select mb-auto list border-black"
                                                        {...field}
                                                        onChange={(e) => {
                                                            const numericValue = parseInt(e.target.value); // Convierte a número
                                                            field.onChange(e);
                                                            setValue("id_programa", numericValue);
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
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="col-sm-4 col-lg-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Nombres
                                        </label>
                                        <div className="col-sm-5 col-lg-7 mx-auto rounded border-black">
                                            <input
                                                type="text"
                                                {...register("nombres_usuario", { required: true })}
                                                className="form-control border-black"
                                                id="nombre_completo"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="col-sm-4 col-lg-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Apellidos
                                        </label>
                                        <div className="col-sm-5 col-lg-7 mx-auto rounded border-black">
                                            <input
                                                type="text"
                                                {...register("apellidos_usuario", { required: true })}
                                                className="form-control border-black"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="col-sm-4 col-lg-2 d-flex justify-content-end align-items-center form-label me-2">
                                            Correo electrónico
                                        </label>
                                        <div className="col-sm-5 col-lg-7 mx-auto rounded border-black">
                                            <input
                                                type="email"
                                                {...register("correo", { required: true })}
                                                className="form-control border-black"
                                                id="correo"
                                            />
                                        </div>
                                    </div>
                                </div>
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
