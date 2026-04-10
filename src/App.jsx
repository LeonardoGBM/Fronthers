import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Inicio from './pages/Inicio'
import Servicio from './pages/Servicio'
import Contactos from './pages/contactos'
import Somos from './pages/Somos'
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/somos" element={<Somos />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
