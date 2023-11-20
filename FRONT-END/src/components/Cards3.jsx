import React from 'react';
import './Cards2.css';
import img_eventos from '../assets/img/eventos.jpg'

export default function Cards2({List}) {
    return (
        <>
        {
        List ? List.map((eventos) =>(
         <div className="col-12 d-flex justify-content-center">
                <div className="col-12 card mb-3" style={{ maxWidth: '650px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img_eventos} className="img-fluid rounded-start" alt="img eventos" />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h5 className="card-title">{eventos.nombre_proyecto}</h5>
                                <p className="card-text">{eventos.descripcion_proyecto}</p>
                                <p className="card-text"><small className="text-body-secondary">{eventos.descripcion_tipo_proyecto}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
        :null
        }
            
        </>
    );
}

