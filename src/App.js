import "./App.css";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
/*
Arquivo App JSX
Componente funcional = porque ele é uma função
*/
function App() {
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class porque class é palavra resrvada do JS */
    <>
      <Cabecalho/>
      <Rodape/>
    </>
  );
}

export default App;
