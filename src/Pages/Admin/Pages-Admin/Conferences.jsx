import React from 'react'
import InputField from '../../../components/InputField'
import Title from '../../../components/Title'
import Buttons from '../../../components/Buttons'
import Grid from '../../../components/Grid'
import DropListField from '../../../components/DropListField'

export default function Conferences() {
    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='mb-5 d-flex justify-content-center'>
                    <Title title='CONFERENCIAS' />
                </div>
                <div className='row'>
                    <div className='col-10'>
                        <InputField label='Nombre' type='text' id='Nombre-Conferencias' placeholder='Nombre conferencias' />
                    </div>
                    <div className='col-2'>
                        <Buttons title='Consultar' color='white' />
                    </div>
                    <div className='col-10'>
                        <DropListField label='Sede' selectOption='Seleciona una sede'/>
                    </div>
                </div>
            </div>
        </div>   )
}
