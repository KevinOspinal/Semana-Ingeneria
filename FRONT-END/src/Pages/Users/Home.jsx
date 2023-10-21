import React from 'react'
import NavbarUser from './NavbarUser'
import './Home.css'
import Hero_Img from '../../assets/img/section-footer.png'
import Cards from '../../components/Cards'
import Cards2 from '../../components/Cards2'
import TitleUsers from '../../components/TitleUsers'
export default function Home() {
  return (
    <div>
      {/*'NAVBAR'*/}
      <NavbarUser />
      {/*'IMAGEN DE LA UNIVERSIDAD'*/}
      <div className='container-fluid mb-5 p-0'>
        <div className='align-items-stretch'>
          <img className='img-fluid w-100' src={Hero_Img} alt='Img del hero principal' />
        </div>
      </div>
      {/*'//EL TITULO INFORMATIVO DE LA SEMANA DE INGENERIA'*/}
      <div className='container  mb-4 p-0 section-otrosEventos'>
        <div className='row'>
          <TitleUsers TitleUsers='SEMANA DE LA INGENERIA' />
          <div className='col-12 d-flex justify-content-center'>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
          </div>
        </div>
      </div>
      {/*'LAS TARJETAS DE LAS CONFERENCIAS'*/}
      <section className='container-fluid'>
        <Cards />
      </section>
      <div className='container  mb-4 p-0'>
        <div className='row'>
          <TitleUsers TitleUsers='EVENTOS' />
        </div>
      </div>
      {/*ESTAS SON LAS TARJETAS DE LOS EVENTOS'*/}
      <section className='container'>
        <div className='row g-4 d-flex justify-content-center'>
          <div className='col-sm-7 col-md-9 col-lg-7'>
            <Cards2 />
          </div>
          <div className='col-sm-5 col-md-3 col-lg-5 d-flex align-items-center'>
            <p>
              <h1 className='d-flex justify-content-center'>INFORMACION</h1>
              <br></br>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </p>
          </div>
        </div>
      </section>
      <div className='container  mb-4 p-0'>
        <div className='row'>
          <TitleUsers TitleUsers='PROYECTOS' />
        </div>
      </div>
    </div>
  )
}