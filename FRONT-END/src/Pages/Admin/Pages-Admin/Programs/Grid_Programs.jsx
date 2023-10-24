import React from "react";

export default function Grid_Programs({ List, handleDelete, handleEdit }) {
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
            <th>Facultad</th>
            </tr>
        </thead>
        <tbody>
            {List
            ? List.map((programas) => (
                <tr key={programas.id_programa}>
                <td>{programas.nombre_programa}</td>
                <td>{programas.nombre_facultad}</td>
                <td>
                    <button
                    className="btn btn-danger btn-sm mr-2"
                    onClick={() => handleDelete(programas.id_programa)}
                    >
                    Eliminar
                    </button>
                    <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(programas)}
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
