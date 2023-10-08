import React from 'react'

export default function Grid_Muestra({List}) {
  
  return (
    <div className="container mt-5">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {List
            ? List.map((sede) => (
                <tr key={sede.id_sede}>
                  <td>{sede.id_sede}</td>
                  <td>{sede.nombre_sede}</td>
                  <td>{sede.direccion}</td>
                  <td>{sede.telefono}</td>
                  <td>
                    <button className="btn btn-danger btn-sm mr-2">Eliminar</button>
                    <button className="btn btn-primary btn-sm">Editar</button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
            
      </table>
    </div>
  );
}