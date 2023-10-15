import React from 'react';

export default function Grid_Document_Type({ List, handleDelete, handleEdit }) {
  return (
    <div className="container mt-5">
      <div className="scrollable-table" style={{ maxHeight: '18rem', overflowY: 'auto' }}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              
              <th>Descripción tipo de documento</th> {/* Cambiado de "Nombre" a "Descripción tipo de documento" */}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {List
              ? List.map((tipo_documento) => (
                <tr key={tipo_documento.id_tipo_documento}>
                  
                  <td>{tipo_documento.descripcion}</td> {/* Cambiado de "nombre_sede" a "descripcion" */}
                  <td>
                    <button className="btn btn-danger btn-sm mr-2" 
                      onClick={() => handleDelete(tipo_documento.id_tipo_documento)}>Eliminar</button>
                      
                    <button className="btn btn-primary btn-sm" 
                      onClick={() => handleEdit(tipo_documento)}>Editar</button>
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

