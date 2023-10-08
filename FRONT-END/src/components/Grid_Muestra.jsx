import React from 'react'

<<<<<<< HEAD
export default function Grid_Muestra() {
=======
export default function Grid_Muestra({List}) {
  
>>>>>>> KevinAcevedo
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
<<<<<<< HEAD
          <tr>
            <td>usuario.id </td>
            <td>usuario.nombre </td>
            <td>usuario.correo </td>
            <td>usuario.password </td>
            <td>
              <button class="btn btn-danger btn-sm mr-2">Eliminar</button>
              <button class="btn btn-primary btn-sm">Editar</button>
            </td>
          </tr>
=======
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
>>>>>>> KevinAcevedo
        </tbody>
            
      </table>
    </div>
  );
}
