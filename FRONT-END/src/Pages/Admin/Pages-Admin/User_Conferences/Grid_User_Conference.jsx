import React from "react";

export default function Grid_User_Conference({ List, handleEdit }) {

  return (
    <div className="container mt-5">
      <div
        className="scrollable-table"
        style={{ maxHeight: "18rem", overflowY: "auto" }}
      >
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Conferencia</th>
              <th>Numero documento</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Estado usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((conferencias) => (
                  <tr key={conferencias.id_conferencia}>
                    <td>{conferencias.nombre_conferencia}</td>
                    <td>{conferencias.documento}</td>
                    <td>{conferencias.nombres_usuario}</td>
                    <td>{conferencias.apellidos_usuario}</td>
                    <td>{conferencias.estado_usuario}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(conferencias.id_usuario_conferencia)}
                      >
                        Asistio
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
