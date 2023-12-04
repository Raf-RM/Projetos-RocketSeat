import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Avatar } from "./styles";
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function Profile(){
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

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
          <Input 
            icon={FiUser} 
            placeholder='Name' 
            type='text' 
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Input
            icon={FiMail}
            placeholder='E-mail' 
            type='text' 
            value={email} 
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div>
          <Input 
            icon={FiLock} 
            placeholder='Senha atual' 
            type='password' 
            onChange={event => setOldPassword(event.target.value)}  
          />
          <Input 
            icon={FiLock} 
            placeholder='Nova senha' 
            type='password'
            onChange={event => setNewPassword(event.target.value)}
          />
        </div>  

        <Button label='Salvar' />

      </Form>
      
    </Container>
  )
}