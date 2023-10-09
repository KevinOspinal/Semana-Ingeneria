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
                  <td>{conferencias.id_sede}</td>
                  <td>{conferencias.fecha}</td>
                  <td>{conferencias.hora}</td>
                  <td>{conferencias.estado}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm mr-2"
                      onClick={() => handleDelete(conferencias.id_conferencia)}
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
