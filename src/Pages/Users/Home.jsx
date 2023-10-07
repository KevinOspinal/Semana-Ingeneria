import React from 'react'
import NavbarUser from './NavbarUser'
import './Home.css'
import Hero_Img from '../../assets/img/hero-principal.jpg'
export default function Home() {
  return (
    <div>
      <NavbarUser/>
      <section className="hero align-items-stretch">
        <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
          contenido
        </div>
        <div className="hero-inferior">
          <img className="hero-inferior-imagen " src={Hero_Img} alt=""/>
        </div>
      </section>
    </div>
  )
}