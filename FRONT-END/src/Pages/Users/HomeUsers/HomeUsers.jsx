import { useState, useEffect } from 'react'
import Axios from 'axios'
import NavbarUser from '../HomeUsers/NavbarUser'
import './HomeUser.css'
import Hero_Img from '../../../assets/img/section-footer.png'
import logo from '../../../assets/img/logo-unicatolica-vertical.png'
import Cards from '../../../components/Cards'
import Cards2 from '../../../components/Cards2'
import TitleUsers from '../../../components/TitleUsers'

import { useAuth } from '../../../Context/AuthContext'

export default function Home() {

  const { user } = useAuth()


  const [conferencesList, setConferencesList] = useState([]);
  const [id_conferencia, setId_conferencia] = useState(null);


  const getConferences = () => {
    Axios.get("http://localhost:3000/getConferences")
      .then((response) => {
        setConferencesList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //FUNCION PARA ACTUALIZAR UNA CONFERENCIA
  const UpdateConferences = (id) => {
    setId_conferencia(id);
    Axios.put(`http://localhost:3000/updateRegistroCupo/${id}`)
      .then((response) => {
        console.log(response)
        // Después de la actualización, vuelva a cargar la lista de conferencias
      })
      .catch((error) => {
        console.error(error);
      });
    Axios.post(`http://localhost:3000/createUserConferences`, {
      Conferencia : id,
      id_usuario : user.id
    }).then((response) => {
      console.log(response)
      // Después de la actualización, vuelva a cargar la lista de conferencias
    })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {

    getConferences()

  }, [id_conferencia])


  return (
    <div>
      <NavbarUser />
      <div className='container-fluid mb-5 p-0'>
        <div className='align-items-stretch'>
          <img className='img-fluid w-100' src={Hero_Img} alt='Img del hero principal' />
        </div>
      </div>
      <div className='container  mb-4 p-0 section-otrosEventos'>
        <div className='row'>
          <TitleUsers TitleUsers='SEMANA DE LA INGENERIA' />
          <div className='col-12 d-flex justify-content-center'>
            <p>La Semana de la Ingeniería en tu universidad es un evento anual de gran relevancia que brinda una plataforma única para celebrar y explorar el apasionante mundo de la tecnología y la ingeniería. Este evento se extiende a lo largo de una semana repleta de actividades, que se dividen en tres categorías fundamentales: conferencias, eventos y proyectos.</p>
          </div>
        </div>
      </div>
      <div id='confenrencias' className='container  mb-4 p-0 section-otrosEventos'>
        <div className='row'>
          <TitleUsers TitleUsers='CONFERENCIAS' />
          <div className='col-12 d-flex justify-content-center'>
            <p>Las conferencias son el núcleo intelectual de la Semana de la Ingeniería. Este segmento atrae a reconocidos expertos y visionarios de la industria que ofrecen charlas inspiradoras y educativas sobre una amplia variedad de temas vanguardistas relacionados con la ingeniería y la tecnología. Las temáticas de las conferencias abarcan desde el análisis de datos masivos (Big Data) hasta la inteligencia artificial y más allá. Estas presentaciones proporcionan una oportunidad excepcional para aprender de los líderes del campo, comprender las últimas tendencias y desafíos en el mundo de la tecnología y establecer contactos valiosos.</p>
          </div>
        </div>
      </div>
      <section className='container-fluid'>
        <Cards List={conferencesList} Obtener_ID={UpdateConferences} />
      </section>
      <div id='eventos' className='container  mb-4 p-0'>
        <div className='row '>
          <TitleUsers TitleUsers='EVENTOS' />
        </div>
      </div>
      <section className='container'>
        <div className='row g-4 d-flex justify-content-center'>
          <div className='col-sm-7 col-md-9 col-lg-7'>
            <Cards2 />
          </div>
          <div className='info-d col-sm-5 col-md-3 col-lg-5 d-flex justify-content-center align-items-center'>
            <p>
              <h4 className='d-flex justify-content-center'>Ingeniería en Acción: Semana Tecnológica</h4>
              <br></br>
              La categoría de eventos se centra en la participación activa de los estudiantes y en la puesta a prueba de sus habilidades y conocimientos. Estos emocionantes desafíos incluyen:            </p>
          </div>
        </div>
      </section>
      <div id='proyectos' className='container mt-4 mb-4 p-0'>
        <div className='row'>
          <TitleUsers TitleUsers='PROYECTOS' />
        </div>
      </div>
      <section className='container'>
        <div className='row g-4 d-flex justify-content-center'>
          <div className='info-i col-sm-5 col-md-4 col-lg-5 d-flex align-items-center'>
            <p>
              <h4 className='d-flex justify-content-center '>Ideas Transformadoras: Presentación de Proyectos de Grado</h4>
              <br />
              <p>La sección de proyectos pone en el centro de atención los esfuerzos y logros de los estudiantes de último semestre, quienes presentan sus proyectos de grado. Estos proyectos representan el resultado de años de estudio, investigación y dedicación. Durante la Semana de la Ingeniería, los estudiantes tienen la oportunidad de exhibir sus creaciones y recibir valiosas críticas constructivas de expertos en el campo. Esta plataforma no solo permite el reconocimiento de los logros estudiantiles, sino que también fomenta un ambiente de aprendizaje colaborativo y mejora continua.</p>
            </p>
          </div>
          <div className='col-sm-7 col-md-8 col-lg-7'>
            <Cards2 />
          </div>
        </div>
      </section>
      <div id='proyectos' className='container mt-4 mb-4 p-0'>
        <div className='row'>
          <div className='col-12'>
            <TitleUsers TitleUsers='CONÉCTATE CON' subtitle='UNICATOLICA' />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
              {/* FACEBOOL */}
              <a href="https://www.facebook.com/unicatolica/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-facebook"></i>
              </a>
              {/* twitter */}
              <a href="https://twitter.com/UnicatolicaCali" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-twitter-x"></i>
              </a>
              {/* Youtube */}
              <a href="https://www.youtube.com/c/unicatolica" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-youtube"></i>
              </a>
              {/* img */}
              <a href="https://www.flickr.com/photos/unicatolica/sets/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-images"></i>
              </a>
              {/* instagram */}
              <a href="https://www.instagram.com/unicatolica/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="d-flex flex-column align-items-center justify-content-center text-white" style={{ background: '#032840' }}>
        <img className="footer-logo" src={logo} alt="logo img" style={{ fontSize: '40px' }} />
        <p className="footer-text text-center">
          Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional – Resolución No. 944 de 1996 MEN – SNIES 2731
        </p>
        <p className="footer-text text-center">
          Sede Principal Cra. 122 No. 12-459 Pance, Cali – Colombia
        </p>
        <p className="footer-text text-center">
          Teléfonos: +57 (2) 555 2767 –  +57 (2) 312 0038
        </p>
      </footer>
    </div>
  )
}