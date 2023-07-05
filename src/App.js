import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Conteudo, { OlaMundo } from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";
/*
Arquivo App JSX
Componente funcional = porque ele é uma função
*/
function App() {
  OlaMundo();
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class porque class é palavra resrvada do JS */
    <>
      <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!" />
      <Conteudo />
      <Rodape />
    </>
  );
}

export default App;
