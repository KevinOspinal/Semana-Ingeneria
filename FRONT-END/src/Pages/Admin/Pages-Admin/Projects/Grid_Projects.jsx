import React from "react";

export default function Grid_Projects({ List, handleDelete, handleEdit }) {
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
              <th>Tipo de Proyecto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((proyectos) => (
                <tr key={proyectos.id_proyecto}>
                  <td>{proyectos.nombre_proyecto}</td>
                  <td>{proyectos.descripcion_proyecto}</td>
                  <td>{proyectos.descripcion_tipo_proyecto}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm mr-2"
                      onClick={() => handleDelete(proyectos.id_proyecto)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(proyectos)}
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
