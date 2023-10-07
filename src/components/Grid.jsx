import React from 'react'

export default function Grid() {
  return (
    <div className="container mt-5">
      <table className="table border border-black">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>123 Calle Principal</td>
            <td>555-123-4567</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Avenida Secundaria</td>
            <td>555-987-6543</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}
