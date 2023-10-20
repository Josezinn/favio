import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'

const routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/Login" element={<LoginUsuario/>}/>
        <Route path="/Cadastro" element={<CadastroUsuario/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default routes
