import React, { useState } from 'react'

const LoginUsuario = () => {
    const [emailUsuario, setEmailUsuario] = useState("");
    const [senhaUsuario, setSenhaUsuario] = useState("");

    function realizarLogin(){
        const usuarioProcurado = emailUsuario;
        const usuariosCadastrados = localStorage.getItem("usuario");
        
                if (usuariosCadastrados) {
                    //Convertendo para objeto JS
                    const usuarios = JSON.parse(usuariosCadastrados);          
                    console.log("Usuários recuperados do localStorage:", usuarios);

                        for(let i = 0; i < usuarios.length; i++) {
                            if(usuarios[i].emailUsuario === usuarioProcurado){
                                alert ('email encontrado');
                            }
                        }
                } else {
                    console.log("Nenhum usuário encontrado no localStorage");
                }
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