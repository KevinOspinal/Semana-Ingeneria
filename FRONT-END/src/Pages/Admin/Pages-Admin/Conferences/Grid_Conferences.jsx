import React from "react";

export default function Grid_Conferences({ List, handleDelete, handleEdit }) {
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
              <th>Descripcion</th>
              <th>Sede</th>
              <th>Cupo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((conferencias) => (
                  <tr key={conferencias.id_conferencia}>
                    <td>{conferencias.nombre_conferencia}</td>
                    <td>{conferencias.descripcion_conferencia}</td>
                    <td>{conferencias.nombre_sede}</td>
                    <td>{conferencias.cupo}</td>
                    <td>{formatDate(conferencias.fecha_conferencia)}</td>
                    <td>{formatTime(conferencias.hora_conferencia)}</td>
                    <td>{conferencias.estado_conferencia}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm mr-2"
                        onClick={() =>
                          handleDelete(conferencias.id_conferencia)
                        }
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(conferencias)}
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
