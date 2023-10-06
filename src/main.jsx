import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'; // Importa el archivo JavaScript de Bootstrap (opcional, solo si necesitas funcionalidad JavaScript)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
