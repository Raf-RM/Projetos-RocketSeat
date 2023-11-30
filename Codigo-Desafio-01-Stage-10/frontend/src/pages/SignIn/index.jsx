import { useAuth } from "../../hooks/auth"; 

import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn(){
  const data = useAuth();
  console.log(data)
  
  return(
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Faça seu Login</h2>

        <div>
          <Input placeholder='E-mail' type='text' icon={FiMail} />
          <Input placeholder='Senha' type='password' icon={FiLock} />
        </div>

        <Button label='Entrar' />

        <ButtonText label='Criar conta'  rote='/register' />

      </Form>

      <Background/>

    </Container>
  )
}