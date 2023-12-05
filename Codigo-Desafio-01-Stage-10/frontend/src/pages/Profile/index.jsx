import { useState } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Form, Avatar } from "./styles";
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";


export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }
    await updateProfile({user, avatarFile});
  }

  function handleAvatarChange(event){
    const file = event.target.files[0];
    setAvatarFile(file);
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return(
    <Container>
      <header>
        <ButtonText label='Voltar' icon={FiArrowLeft} rote={'/'}/>
      </header>
      <Form>

        <Avatar>
          <img src={avatar} alt="Foto do github do usuário raf-rm" />

          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              type="file" 
              id="avatar"
              onChange={handleAvatarChange}
            />
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

        <Button label='Salvar' onClick={handleUpdate} />

      </Form>
      
    </Container>
  )
}