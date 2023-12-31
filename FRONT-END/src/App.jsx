import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Users/Home/Home';
import HomeUsers from './Pages/Users/HomeUsers/HomeUsers';
import Assistants from './Pages/Users/Assistants/Assistants';
import { AuthProvider } from './Context/AuthContext';
import { ProtectedRoute } from './ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute allowedRoles={[1, 2, 3, 4]} />}>
            <Route path='/HomeUsers' element={<HomeUsers />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[5]} />}>
            <Route path='/Admin' element={<Admin />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[6]} />}>
            <Route path='/Assistants' element={<Assistants />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;
