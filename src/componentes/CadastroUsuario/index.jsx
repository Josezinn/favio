import React, { useState, useEffect } from 'react'

const CadastroUsuario = () => {
    const [emailUsuario, setEmailUsuario] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [senhaUsuario, setSenhaUsuario] = useState("");
    const [confirmaSenhaUsuario, setConfirmaSenhaUsuario] = useState("");
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
      // Recupera os usuários do localStorage quando o componente for montado
        const usuariosCadastrados = JSON.parse(localStorage.getItem("usuario"));
        if (usuariosCadastrados) {
            setUsuarios(usuariosCadastrados);
        }
      }, []);

    function salvarCadastroUsuario() {
        if(senhaUsuario !== confirmaSenhaUsuario) {
            alert('As senhas não coincidem. Por favor, digite novamente.');
        } else {
          const novosUsuarios = [...usuarios, { nomeUsuario, emailUsuario, senhaUsuario }];
          setUsuarios(novosUsuarios);
          localStorage.setItem("usuario", JSON.stringify(novosUsuarios));

            console.log("usuarios>>>:", usuarios);
            console.log("estados>>>:", { nomeUsuario, emailUsuario });
            console.log("usuarios 2>>>:", usuarios);
        }
      }

  return (
    <div> 
       <h1>Cadastro de Usuário</h1> 
       <form>

        <label>Nome</label>
        <br />
        <input
          name="nome"
          onChange={(evento) => {
            setNomeUsuario(evento.target.value);
          }}
        ></input>

        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={(evento) => {
            setEmailUsuario(evento.target.value);
          }}
        ></input>

        <br />
        <label>Senha</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={(evento) => {
            setSenhaUsuario(evento.target.value);
          }}
        ></input>
        <br />
        <label>Confirmação da Senha</label>
        <br />

        <input
          type="password"
          name="password"
          onChange={(evento) => {
            setConfirmaSenhaUsuario(evento.target.value);
          }}
        ></input>
        

        <input type="button" value="Salvar"
        onClick={()=> salvarCadastroUsuario()}/>
        {/*<button onClick={() => salvarFavorito}>Salvar</button>*/}
      </form>
    </div>
  )
}

export default CadastroUsuario