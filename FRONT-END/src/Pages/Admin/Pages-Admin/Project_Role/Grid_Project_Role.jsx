import React from "react";

export default function Grid_Project_Role({ List, handleDelete, handleEdit }) {
return (
    <div className="container mt-5">
    <div
        className="scrollable-table"
        style={{ maxHeight: "18rem", overflowY: "auto" }}
    >
        <table className="table">
        <thead className="thead-dark">
            <tr>
            <th>Descripcion tipo de rol</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {List
            ? List.map((tipo_rol_proyecto) => (
                <tr key={tipo_rol_proyecto.id_rol_proyecto}>
                <td>{tipo_rol_proyecto.descripcion}</td>
                <td>
                    <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => handleDelete(tipo_rol_proyecto.id_rol_proyecto)}
                    >
                    Eliminar
                    </button>
                    <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(tipo_rol_proyecto)}
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
