import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password ){
      return alert("Preencha todos os campos para continuar o cadastro!");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível realizar o cadastro.");
      }
    })
  }

  return(
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Crie sua conta</h2>

        <div>
          <Input 
            placeholder='Nome' 
            type='text' 
            icon={FiUser} 
            onChange={event => setName(event.target.value)}
          />
          <Input 
            placeholder='E-mail' 
            type='text' 
            icon={FiMail}
            onChange={event => setEmail(event.target.value)}
          />
          <Input 
            placeholder='Senha' 
            type='password' 
            icon={FiLock}
            onChange={event => setPassword(event.target.value)}
          />
        </div>

        <Button
         label='Cadastrar'
         onClick={handleSignUp}
        />

        <ButtonText label='Voltar para o login' icon={FiArrowLeft} rote='/' />

      </Form>

      <Background/>

    </Container>
  )
}