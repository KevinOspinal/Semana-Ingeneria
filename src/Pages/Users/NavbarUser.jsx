import React from 'react'

export default function NavbarUser() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-toggler">
                    <a className="navbar-brand"></a>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link mb-2" aria-current="page">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mb-2" aria-current="page">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mb-2" aria-current="page">Studies</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">Iniciar sesion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Registrarme</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
