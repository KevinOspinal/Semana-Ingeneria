import React from 'react'
import NavbarUser from './NavbarUser'
import Title from '../../components/Title'
import './Home.css'
import Hero_Img from '../../assets/img/section-footer.png'
import Cards from '../../components/Cards'
export default function Home() {
  return (
    <div>
      <NavbarUser />
      <div className='container-fluid mb-5 p-0'>
          <div className='align-items-stretch'>
            <img className='img-fluid w-100' src={Hero_Img} alt='Img del hero principal' />
          </div>
      </div>
      <div className='container  mb-3 p-0 section-otrosEventos'>
        <div className='row'>
          <Title title='SEMANA DE LA INGENERIA'/>
          <div className='col-12 d-flex justify-content-center'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
          </div>
        </div>
      </div>
      <section className='container-fluid'>
        <Cards />
      </section>
      <div className='container-fluid bg-black mb-3 p-0'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center'>
           <Title title='EVENTOS'/>
          </div>
        </div>
      </div>
    </div>
  )
}