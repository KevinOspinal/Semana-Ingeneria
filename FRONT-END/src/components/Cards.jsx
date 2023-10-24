import React from 'react';
import './Cards.css';
import img from '../assets/img/img-prueba.jpg';
import Buttons from './Buttons';
export default function Cards({openRegisterModal}) {
  return (
    <div className="row d-flex justify-content-center w-100 g-4">
      <div className="col-sm-12 col-md-4 col-lg-2 card border-0 h-100" style={{ width: '22rem' }}> {/* Modifica el ancho de la tarjeta */}
        <img src={img} className="card-img-top img-fluid rounded" alt="..." /> {/* Modifica la altura de la imagen */}
        <div className='container-fluid footer-container'>
          <div className="card-body d-flex justify-content-center">
            <h5 className="card-title">Learn Angular JS with Live projects</h5>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-person-circle"></i>
                <p className="small-text text-center mb-0 mt-2">Kevin Acevedo</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-calendar"></i>
                <p className="small-text text-center mb-0 mt-2">Feb. 16, 2022</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <p className="small-text text-center mb-0 mt-2">6:00pm</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clipboard2-check"></i>
                <p className="small-text text-center mb-0 mt-2">10/30</p> {/* Agrega un párrafo con la clase small-text */}
              </div>
            </div>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <Buttons title='Registrarme' color='#002f59' fontSize='10px'  colorbutton='#ffffff' onClick={openRegisterModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-2 card border-0 h-100" style={{ width: '22rem' }}> {/* Modifica el ancho de la tarjeta */}
        <img src={img} className="card-img-top img-fluid rounded" alt="..." /> {/* Modifica la altura de la imagen */}
        <div className='container-fluid footer-container'>
          <div className="card-body d-flex justify-content-center">
            <h5 className="card-title">Learn Angular JS with Live projects</h5>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-person-circle"></i>
                <p className="small-text text-center mb-0 mt-2">Kevin Acevedo</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-calendar"></i>
                <p className="small-text text-center mb-0 mt-2">Feb. 16, 2022</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <p className="small-text text-center mb-0 mt-2">6:00pm</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clipboard2-check"></i>
                <p className="small-text text-center mb-0 mt-2">10/30</p> {/* Agrega un párrafo con la clase small-text */}
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
      <div className="col-sm-12 col-md-4 col-lg-2 card border-0 h-100" style={{ width: '22rem' }}> {/* Modifica el ancho de la tarjeta */}
        <img src={img} className="card-img-top img-fluid rounded" alt="..." /> {/* Modifica la altura de la imagen */}
        <div className='container-fluid footer-container'>
          <div className="card-body d-flex justify-content-center">
            <h5 className="card-title">Learn Angular JS with Live projects</h5>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-person-circle"></i>
                <p className="small-text text-center mb-0 mt-2">Kevin Acevedo</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-calendar"></i>
                <p className="small-text text-center mb-0 mt-2">Feb. 16, 2022</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <p className="small-text text-center mb-0 mt-2">6:00pm</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clipboard2-check"></i>
                <p className="small-text text-center mb-0 mt-2">10/30</p> {/* Agrega un párrafo con la clase small-text */}
              </div>
            </div>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <Buttons title='Registrarme' color='#002f59' fontSize='10px' onClick={openRegisterModal}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-2 card border-0 h-100" style={{ width: '22rem' }}> {/* Modifica el ancho de la tarjeta */}
        <img src={img} className="card-img-top img-fluid rounded" alt="..." /> {/* Modifica la altura de la imagen */}
        <div className='container-fluid footer-container'>
          <div className="card-body d-flex justify-content-center">
            <h5 className="card-title">Learn Angular JS with Live projects</h5>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-person-circle"></i>
                <p className="small-text text-center mb-0 mt-2">Kevin Acevedo</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-calendar"></i>
                <p className="small-text text-center mb-0 mt-2">Feb. 16, 2022</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <p className="small-text text-center mb-0 mt-2">6:00pm</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clipboard2-check"></i>
                <p className="small-text text-center mb-0 mt-2">10/30</p> {/* Agrega un párrafo con la clase small-text */}
              </div>
            </div>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <Buttons title='Registrarme' color='#002f59' fontSize='10px' onClick={openRegisterModal}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-2 card border-0 h-100" style={{ width: '22rem' }}> {/* Modifica el ancho de la tarjeta */}
        <img src={img} className="card-img-top img-fluid rounded" alt="..." /> {/* Modifica la altura de la imagen */}
        <div className='container-fluid footer-container'>
          <div className="card-body d-flex justify-content-center">
            <h5 className="card-title">Learn Angular JS with Live projects</h5>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-person-circle"></i>
                <p className="small-text text-center mb-0 mt-2">Kevin Acevedo</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-calendar"></i>
                <p className="small-text text-center mb-0 mt-2">Feb. 16, 2022</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <p className="small-text text-center mb-0 mt-2">6:00pm</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clipboard2-check"></i>
                <p className="small-text text-center mb-0 mt-2">10/30</p> {/* Agrega un párrafo con la clase small-text */}
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
      <div className="col-sm-12 col-md-4 col-lg-2 card border-0 h-100" style={{ width: '22rem' }}> {/* Modifica el ancho de la tarjeta */}
        <img src={img} className="card-img-top img-fluid rounded" alt="..." /> {/* Modifica la altura de la imagen */}
        <div className='container-fluid footer-container'>
          <div className="card-body d-flex justify-content-center">
            <h5 className="card-title">Learn Angular JS with Live projects</h5>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-person-circle"></i>
                <p className="small-text text-center mb-0 mt-2">Kevin Acevedo</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-calendar"></i>
                <p className="small-text text-center mb-0 mt-2">Feb. 16, 2022</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <p className="small-text text-center mb-0 mt-2">6:00pm</p>
              </div>
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <i className="bi bi-clipboard2-check"></i>
                <p className="small-text text-center mb-0 mt-2">10/30</p> {/* Agrega un párrafo con la clase small-text */}
              </div>
            </div>
          </div>
          <div className="container-fluid card-footer bg-transparent d-flex justify-content-center align-items-center w-100" >
            <div className="row">
              <div className="col-sm-3 col-md-4 col-lg-3 d-flex align-items-center">
                <Buttons title='Registrarme' color='#002f59' fontSize='10px' onClick={openRegisterModal}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}