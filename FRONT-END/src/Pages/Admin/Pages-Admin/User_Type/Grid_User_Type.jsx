import React from "react";

export default function Grid_User_Type({ List, handleDelete, handleEdit }) {
  return (
    <div className="container mt-5">
      <div
        className="scrollable-table"
        style={{ maxHeight: "18rem", overflowY: "auto" }}
      >
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Descripcion tipo de usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((tipo_usuario) => (
                  <tr key={tipo_usuario.id_tipo_usuario}>
                    <td>{tipo_usuario.descripcion_tipo}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm mr-2"
                        onClick={() => handleDelete(tipo_usuario.id_tipo_usuario)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(tipo_usuario)}
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
