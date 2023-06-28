import logo from './logo.svg';
import './App.css';
/*
Arquivo App JSX
Componente funcional = porque ele é uma função
*/
function App() {
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class porque class é palavra resrvada do JS */
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         José Francisco
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
