import React from 'react'
import NavbarUser from './NavbarUser'
import './Home.css'
import Hero_Img from '../../assets/img/section-footer.png'
import Cards from '../../components/Cards'
export default function Home() {
  return (
    <div>
      <NavbarUser />
      <div className='container-fluid mb-3 p-0'>
          <div className='hero align-items-stretch'>
            <img className='img-fluid w-100' src={Hero_Img} alt='Img del hero principal' />
          </div>
      </div>
      <section className='container-fluid'>
        <Cards />
      </section>
    </div>
  )
}