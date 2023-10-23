import React from 'react'
import './TitleUsers.css'
export default function TitleUsers({ TitleUsers, subtitle }) {
    return (
        <div className='col-12 d-flex justify-content-center'>
            <div className='col-3'>
                <p className='line'></p>
            </div>
            <div className='col-6 d-flex flex-column mb-3'>
                <div class="p-2 d-flex justify-content-center">
                    <h1 style={{color:'#686868'}}>{TitleUsers}</h1>
                </div>
                <div class="p-2 d-flex justify-content-center">
                    <p>{subtitle}</p>
                </div>
            </div>
            <div className='col-3'>
                <p className='line'></p>
            </div>
        </div>
    )
}
