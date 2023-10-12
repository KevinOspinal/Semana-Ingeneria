import React from "react";

export default function Grid_Conferences({ List, handleDelete, handleEdit }) {
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
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((conferencias) => (
                <tr key={conferencias.id_conferencia}>
                  <td>{conferencias.descipcion}</td>
                  <td>{conferencias.nombre_sede}</td>
                  <td>{conferencias.cupo}</td>
                  <td>{conferencias.fecha}</td>
                  <td>{conferencias.hora}</td>
                  <td>{conferencias.estado_conferencia}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm mr-2"
                      onClick={() => handleDelete(conferencias.descipcion)}
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
