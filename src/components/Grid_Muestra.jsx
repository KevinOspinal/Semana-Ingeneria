import React from 'react'

export default function Grid_Muestra() {
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
        </tbody>
            
      </table>
    </div>
  );
}
