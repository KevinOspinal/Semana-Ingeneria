import React from 'react'
import NavbarUser from './NavbarUser'
import './Home.css'
import Hero_Img from '../../assets/img/section-footer.png'
import Cards from '../../components/Cards'
export default function Home() {
  return (
    <div>
      <NavbarUser />
      <section className='container-fluid mb-3'>
          <div className='hero align-items-stretch'>
            <img className='img-fluid' src={Hero_Img} alt='Img del hero principal' />
          </div>
      </section>
      <section className='container-fluid'>
        <Cards />
      </section>
    </div>
  )
}