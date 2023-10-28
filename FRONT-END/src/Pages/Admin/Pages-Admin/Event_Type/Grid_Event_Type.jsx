import React from 'react';

export default function Grid_Event_Type({ List, handleDelete, handleEdit }) {
  return (
    <div className="container mt-5">
      <div
        className="scrollable-table"
        style={{ maxHeight: "18rem", overflowY: "auto" }}
      >
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Descripcion tipo evento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((tipo_Tipos_eventos) => (
                  <tr key={tipo_Tipos_eventos.id_tipo_evento}>
                    <td>{tipo_Tipos_eventos.descripcion_otro_evento}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm mr-2"
                        onClick={() =>
                          handleDelete(tipo_Tipos_eventos.id_tipo_evento)
                        }
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(tipo_Tipos_eventos)}
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