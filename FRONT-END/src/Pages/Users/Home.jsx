import React from 'react'
import NavbarUser from './NavbarUser'
import './Home.css'
import Hero_Img from '../../assets/img/hero-principal.jpg'
import Cards from '../../components/Cards'
export default function Home() {
  return (
    <div>
      <NavbarUser/>
      <section className='container'>
          <Cards/>
      </section>
    </div>
  )
}