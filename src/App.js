import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo, { OlaMundo } from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
/*
Arquivo App JSX
Componente funcional = porque ele é uma função
*/
const express = require ("express");
const app = express ();
const port = process. env. PORT || 3000;
app. listen (port, ()=>{
   console. log (`API pronta  para uso na porta: ${port}`);
});

app.get ("/", (req, res, next) =>{            
  res. json ({ title: "API em Node.js" });
});
    


function App() {
  OlaMundo();
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class porque class é palavra resrvada do JS */
    <>
      <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!" />
      <Conteudo />
      <Rodape svg1="facebook.svg"/>
    </>
  );
}

export default App;
