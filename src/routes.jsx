import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Principal from './paginas/Principal'
import LoginUsuario from './paginas/LoginUsuario'
import CadastroUsuario from './paginas/CadastroUsuario'
import Cabecalho from './componentes/Cabecalho'
import Rodape from "./componentes/Rodape";


const Rotas = () => {
  return (
    <BrowserRouter>
          <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!" />
          <Rodape/>
    <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/Login" element={<LoginUsuario/>}/>
        <Route path="/Cadastro" element={<CadastroUsuario/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Rotas
