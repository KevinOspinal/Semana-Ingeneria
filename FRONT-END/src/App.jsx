import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Pages/Admin/Admin'
import Home from './Pages/Users/Home/Home'
import HomeUsers from './Pages/Users/HomeUsers/HomeUsers'
import Asistentes from './Pages/Users/Home/Home'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/HomeUsers' element={<HomeUsers />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Asistente' element={<Asistentes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
