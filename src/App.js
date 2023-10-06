import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import CadastroUsuario from "./componentes/CadastroUsuario";
import Conteudo from "./componentes/Conteudo";
import LoginUsuario from "./componentes/LoginUsuario";
import Rodape from "./componentes/Rodape";
import Estados from "./exemplos/Estados";
/*
Arquivo App JSX
Componente funcional = porque ele é uma função
*/
function App() {
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class porque class é palavra resrvada do JS */
    <>
        
      <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!" />
       <CadastroUsuario/>
       <LoginUsuario/>      
      {/* <Conteudo /> */}
      {/*<Estados/>*/}
      <Rodape/>
    </>
  );
}

export default App;