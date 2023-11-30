import { useState } from "react";

import { useAuth } from "../../hooks/auth"; 

import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }
  
  return(
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Faça seu Login</h2>

        <div>
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
          label='Entrar'
          onClick={handleSignIn}
        />

        <ButtonText label='Criar conta'  rote='/register' />

      </Form>

      <Background/>

    </Container>
  )
}