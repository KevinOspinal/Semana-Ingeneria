import React from "react";
import InputField from "../../../components/InputField";
import Title from "../../../components/Title";
import Buttons from "../../../components/Buttons";
import DropListField from "../../../components/DropListField";
import Grid_Muestra from "../../../components/Grid_Muestra";

export default function Conferences() {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="mb-5 d-flex justify-content-center">
                    <Title title="CONFERENCIAS" />
                </div>
                <div className="row">
                    <div className="col-10">
                        <InputField
                            label="Nombre"
                            type="text"
                            id="Nombre-Conferencias"
                            placeholder="Nombre de la conferencias"
                        />
                    </div>
                    <div className="col-2">
                        <Buttons title="Consultar" color="white" />
                    </div>
                    <div className="col-10">
                        <DropListField label="Sede" selectOption="Seleciona una sede" />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Cupo"
                            type="number"
                            id="Cupo-Conferencias"
                            placeholder="Cupo de la conferencias"
                        />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Fecha"
                            type="date"
                            id="Fecha-Conferencias"
                            placeholder="Fecha de la conferencias"
                        />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Hora"
                            type="time"
                            id="Hora-Conferencias"
                            placeholder="Hora de la conferencias"
                        />
                    </div>
                    <div className="col-10">
                        <InputField
                            label="Estado"
                            type="text"
                            id="Estado-Conferencias"
                            placeholder="Estado de la conferencias"
                        />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Grid_Muestra/>
                        </div>
                    </div>
                    <div className="container-fluid mt-4 d-flex justify-content-center">
                        <div className="col-4 d-flex justify-content-center">
                            <Buttons title="Guardar" color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
