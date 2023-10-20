import React from 'react'
import Cabecalho from "../../componentes/Cabecalho";
import Conteudo from "../../componentes/Conteudo";
import Rodape from "../../componentes/Rodape";

const Principal = () => {
  return (
    /*O React substitui className por class porque class é palavra resrvada do JS */
    <>        
      <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!" />
      <Conteudo />
      <Rodape/>
    </>
  )
}

export default Principal