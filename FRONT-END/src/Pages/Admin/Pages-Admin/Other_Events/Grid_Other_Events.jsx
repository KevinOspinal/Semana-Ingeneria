import React from "react";

export default function Grid_Other_Events({ List, handleDelete, handleEdit }) {
  // Función para formatear la fecha con mes en letras
const formatDate = (dateString) => {
    const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

  // Función para formatear la hora en formato de 12 horas
const formatTime = (timeString) => {
    const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    };
    return new Date(`1970-01-01T${timeString}`).toLocaleTimeString(
    undefined,
    options
    );
};

return (
    <div className="container mt-5">
    <div
        className="scrollable-table"
        style={{ maxHeight: "18rem", overflowY: "auto" }}
    >
        <table className="table">
        <thead className="thead-dark">
            <tr>
            <th>Nombre</th>
            <th>Sede</th>
            <th>Cupo</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {List
            ? List.map((Otros_Eventos) => (
                <tr key={Otros_Eventos.id_otro_evento}>
                    <td>{Otros_Eventos.nombre_evento}</td>
                    <td>{Otros_Eventos.nombre_sede}</td>          
                    <td>{Otros_Eventos.cupo}</td>
                    <td>{formatDate(Otros_Eventos.fecha)}</td>
                    <td>{formatTime(Otros_Eventos.hora)}</td>
                    <td>{Otros_Eventos.descripcion_otros_eventos}</td>
                    <td>{Otros_Eventos.estado_evento}</td>
                    <td>
                    <button
                        className="btn btn-danger btn-sm mr-2"
                        onClick={() =>
                        handleDelete(Otros_Eventos.id_otro_evento)
                        }
                    >
                        Eliminar
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(Otros_Eventos)}
                    >
                        Editar
                    </button>
                    </td>
                </tr>
                ))
            : null}
        </tbody>
        </table>
    </div>
    </div>
);
}