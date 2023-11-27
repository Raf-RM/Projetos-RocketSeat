import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp(){
  return(
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Crie sua conta</h2>

        <div>
          <Input placeholder='Nome' type='text' icon={FiUser} />
          <Input placeholder='E-mail' type='text' icon={FiMail} />
          <Input placeholder='Senha' type='password' icon={FiLock} />
        </div>

        <Button label='Cadastrar' />

        <ButtonText label='Voltar para o login' icon={FiArrowLeft} rote='/' />

      </Form>

      <Background/>

    </Container>
  )
}