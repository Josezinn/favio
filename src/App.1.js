import Cabecalho from "./componentes/Cabecalho";
import Conteudo from "./componentes/Conteudo";
import Rodape from "./componentes/Rodape";

/*
Arquivo App JSX
Componente funcional = porque ele é uma função
*/
export function App() {
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class porque class é palavra resrvada do JS */
    <>
      <Cabecalho
        logo="logo192.png"
        titulo="Fav.io"
        subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"
      />
      <Conteudo />
      {/*<Estados/>*/}
      <Rodape />
    </>
  );
}
