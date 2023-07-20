import React from 'react';
import styles from "./Rodape.module.css";
import IconeFacebook from "../../facebook.svg"
import IconeInstagram from "../../instagram.svg"
import IconeTwitter from "../../twitter.svg"

const Rodape = () => {
  const obterDataAtual = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className={styles.rodape}>

      <div className={styles.dataCorrente}>
        Data Atual: {obterDataAtual()}
      </div>

      <div className={styles.icons}>  
        {/* Renderiza os ícones usando as tags <img> */}
        <img className={styles.svg} src={IconeFacebook} />
        <img className={styles.svg} src={IconeInstagram} />
        <img className={styles.svg} src={IconeTwitter} />
      </div>
     
    </div>
  )
}

export default Rodape;