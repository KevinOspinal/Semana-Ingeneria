import React from 'react';

export default function Grid_Project_Role({ List, handleDelete, handleEdit }) {
  return (
    <div className="container mt-5">
    <div className="scrollable-table" style={{ maxHeight: '18rem', overflowY: 'auto' }}>
        <table className="table">
        <thead className="thead-dark">
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {List
            ? List.map((roles_proyectos) => (
                <tr key={roles_proyectos.id_rol_proyecto}>
                    <td>{roles_proyectos.id_rol_proyecto}</td>
                    <td>{roles_proyectos.descripcion}</td>
                    <td>
                    <button className="btn btn-danger btn-sm mr-2" onClick={() => handleDelete(roles_proyectos.id_rol_proyecto)}>Eliminar</button>
                    <button className="btn btn-primary btn-sm" onClick={() => handleEdit(roles_proyectos)}>Editar</button>
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