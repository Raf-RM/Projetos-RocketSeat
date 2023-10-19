import { Container, Form, Avatar } from "./styles";
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function Profile(){
  return(
    <Container>
      <header>
        <ButtonText label='Voltar' icon={FiArrowLeft} rote={'/'}/>
      </header>
      <Form>

        <Avatar>
          <img src="https://github.com/raf-rm.png" alt="Foto do github do usuário raf-rm" />

          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id="avatar" />
          </label>

        </Avatar>

        <div>
          <Input icon={FiUser} placeholder='Name' type='text' />
          <Input icon={FiMail} placeholder='E-mail' type='text' />
        </div>

        <div>
          <Input icon={FiLock} placeholder='Senha atual' type='password' />
          <Input icon={FiLock} placeholder='Nova senha' type='password' />
        </div>  

        <Button label='Salvar' />

      </Form>
      
    </Container>
  )
}