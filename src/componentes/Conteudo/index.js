import React, { useState } from 'react'
import styles from './Conteudo.module.css'

const Conteudo = () => {

  const [nomeSite,setNomeSite]=useState('')
  const [url,setUrl]=useState('')

  let favoritos=[]

  function salvarFavorito() {
    console.log('favoritos>>>:', favoritos)
    console.log('estados>>>:', {nomeSite, url})
    favoritos=[...favoritos, {nomeSite,url}]
    console.log('favoritos 2>>>:', favoritos)
    localStorage.setItem("favorito", JSON.stringify(favoritos));
  }

  return (
    <div className={styles.area}>
        Conteudo
    <form className={styles.formulario} onSubmit={()=>alert("Favorito salvo")}>
        <label>
            Nome do Site
        </label> 
          <h1>{nomeSite}</h1>
        <br/>
        <input name='nome_site' 
        onChange={(evento) => {
          setNomeSite(evento.target.value);
          console.log(nomeSite);
        }}
        ></input>
        <br/>
        <label>
            URL
        </label> 
        <h1>{url}</h1>
        <br/>
        <input type='url' name='url'
         onChange={(evento) => {
          setUrl(evento.target.value);
          console.log(url);
        }}        
        ></input>
        <button onClick={()=> salvarFavorito}>Salvar</button>
    </form>
    </div>
  )
}
export default Conteudo;