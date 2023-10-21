import React from 'react';
import './Cards2.css';
import eventos from '../assets/img/eventos.jpg'
export default function Cards2() {
    return (
        <>
            <div className="col-12 d-flex justify-content-center">
                <div className="card mb-3" style={{ maxWidth: '650px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={eventos} className="img-fluid rounded-start" alt="img eventos" />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Repite esta estructura para las otras dos tarjetas */}
            <div className="col-12 d-flex justify-content-center">
                <div className="card mb-3" style={{ maxWidth: '650px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={eventos} className="img-fluid rounded-start" alt="img eventos" />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="card mb-3" style={{ maxWidth: '650px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={eventos} className="img-fluid rounded-start" alt="img eventos" />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

