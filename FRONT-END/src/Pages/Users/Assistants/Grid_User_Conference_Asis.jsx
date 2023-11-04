import React from "react";

export default function Grid_User_Conference_Asis({ List, handleEdit }) {
  // Función para formatear la fecha con mes en letras
  
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
              ? List.map((user) => (
                <tr key={user.id_usuario_conferencia}>
                  <td>{user.nombre_conferencia}</td>
                  <td>{user.documento}</td>
                  <td>{user.nombres_usuario}</td>
                  <td>{user.apellidos_usuario}</td>
                  <td>{user.estado_usuario}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(user.id_usuario_conferencia)}
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
