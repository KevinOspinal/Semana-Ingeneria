import './Assistants.css'

import User_Conferences_Asis from './User_Conferences_Asis'
import { useAuth } from '../../../Context/AuthContext'
import Buttons from '../../../components/Buttons'





export default function Assistants() {

  const { logout } = useAuth()


  return (
    
    <div className="context-container ">
      <div className="row">
        <div className='col-12'>
          <User_Conferences_Asis />
        </div>
        <div className='col-12 d-flex justify-content-center'>
          <Buttons
            title="Cerrar sesion"
            color="#002f59"
            fontSize="18px"
            colorbutton="#ffffff"
            onClick={() => {
              logout()
            }}
          />
        </div>
      </div>
    </div>
  )
}