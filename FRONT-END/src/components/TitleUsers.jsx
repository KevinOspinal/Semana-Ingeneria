import React from 'react'
import './TitleUsers.css'
export default function TitleUsers({TitleUsers}) {
    return (
        <div className='col-12 d-flex justify-content-center'>
            <div className='col-3'>
                <p className='line'></p>
            </div>
            <div className='col-6 d-flex justify-content-center'>
                <h1>{TitleUsers}</h1>
            </div>
            <div className='col-3'>
                <p className='line'></p>
            </div>
        </div>
    )
}
