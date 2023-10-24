import React from 'react';

export default function Grid_Headquarters({ List, handleDelete, handleEdit }) {
  return (
    <div className="container mt-5">
      <div className="scrollable-table" style={{ maxHeight: '18rem', overflowY: 'auto' }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((sede) => (
                  <tr key={sede.id_sede}>
                    <td>{sede.nombre_sede}</td>
                    <td>{sede.direccion}</td>
                    <td>{sede.telefono}</td>
                    <td>
                      <button className="btn btn-danger btn-sm mr-2" onClick={() => handleDelete(sede.id_sede)}>Eliminar</button>
                      <button className="btn btn-primary btn-sm" onClick={() => handleEdit(sede)}>Editar</button>
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
