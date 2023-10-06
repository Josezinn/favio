import React, { useState } from 'react'

const LoginUsuario = () => {
    const [emailUsuario, setEmailUsuario] = useState("");
    const [senhaUsuario, setSenhaUsuario] = useState("");

    function realizarLogin(){        
        const usuariosCadastrados = localStorage.getItem("usuario");

        if (usuariosCadastrados) {
            // Converter o valor JSON de volta para um objeto JavaScript
            const usuarios = JSON.parse(usuariosCadastrados);
          
          } else {
            console.log("Nenhum usuário encontrado no localStorage");
          }


            // if (usuariosCadastrados.find((usuario) => usuario.emailUsuario === emailUsuario && usuario.senhaUsuario === senhaUsuario)){
            //     alert('Parabéns, você se logou com sucesso!');
            // } else {
            //     alert('Erro! Não foi possivel efetuar o login, confira as credenciais')
            // }

    }
  return (
    <div>
       <h1>Login de Usuário</h1> 
       <form>
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

            <input type="button" value="Login"
            onClick={()=> realizarLogin()}/>
         </form>
    </div>
  )
}

export default LoginUsuario