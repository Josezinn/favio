import React, { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");
  const [favoritos, setFavoritos] =useState([])


  function salvarFavorito() {
    console.log("favoritos>>>:", favoritos);
    console.log("estados>>>:", { nomeSite, url });
    setFavoritos([...favoritos, { nomeSite, url }])
    console.log("favoritos 2>>>:", favoritos);
    localStorage.setItem("favorito", JSON.stringify(favoritos));
  }

  return (
    <>
    <ul>
        {favoritos[0]!==undefined &&
          favoritos.map((favorito) => (
            <li>{favorito.nomeSite} : {favorito.url}</li>
          
          ))}
    </ul>
    <div className={styles.area}>
      
      <h1>Conteudo</h1>
      <form
        className={styles.formulario}
      >
        <label>Nome do Site</label>
        <h1>{nomeSite}</h1>
        <br />
        <input
          name="nome_site"
          onChange={(evento) => {
            setNomeSite(evento.target.value);
            console.log(nomeSite);
          }}
        ></input>
        <br />
        <label>URL</label>
        <h1>{url}</h1>
        <br />
        <input
          type="url"
          name="url"
          onChange={(evento) => {
            setUrl(evento.target.value);
            console.log(url);
          }}
        ></input>
        <input type="button" value="Salvar"
        onClick={()=> salvarFavorito()}/>
        {/*<button onClick={() => salvarFavorito}>Salvar</button>*/}
      </form>
    </div>
    </>
  );
};
export default Conteudo;
