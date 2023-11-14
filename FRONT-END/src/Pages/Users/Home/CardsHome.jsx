import React from 'react';
import '../../../components/Cards.css';
import img from '../../../assets/img/img-prueba.jpg';
import Buttons from '../../../components/Buttons';

export default function CardsHome({ List, openRegisterModal }) {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(`1970-01-01T${timeString}`).toLocaleTimeString(
      undefined,
      options
    );
  };

  return (
    <div className="row d-flex justify-content-center w-100 g-4">
      {List
        ? List.map((conferencias) => (
          <div className="col-sm-12 col-md-4 col-lg-2 card border-0 h-100" key={conferencias.id_conferencia} style={{ width: '22rem' }}>
            <img src={img} className="card-img-top img-fluid rounded" alt="..." />
            <div className='container-fluid footer-container'>
              <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">{conferencias.nombre_conferencia}</h5>
              </div>
              <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
                <div className="row">
                  <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                    <i className="bi bi-person-circle"></i>
                    <p className="small-text text-center mb-0 mt-2">{conferencias.conferencista}</p>
                  </div>
                  <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                    <i className="bi bi-calendar"></i>
                    <p className="small-text text-center mb-0 mt-2">{formatDate(conferencias.fecha_conferencia)}</p>
                  </div>
                  <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                    <i className="bi bi-clock"></i>
                    <p className="small-text text-center mb-0 mt-2">{formatTime(conferencias.hora_conferencia)}</p>
                  </div>
                  <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                    <i className="bi bi-clipboard2-check"></i>
                    <p className="small-text text-center mb-0 mt-2">{conferencias.Cupos_Registrados}/{conferencias.cupo}</p>
                  </div>
                </div>
              </div>
              <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
                <div className="row">
                  <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                     <Buttons title='Registrarme' color='#002f59' fontSize='10px' onClick={openRegisterModal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        : null}
    </div>
  );
}
