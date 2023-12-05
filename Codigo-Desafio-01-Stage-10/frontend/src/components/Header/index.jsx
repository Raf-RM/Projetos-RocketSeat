import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function Header(){
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />      
      <Profile>
        <div>
          <span>{user.name}</span>
          <ButtonText label="sair" rote='/' onClick={signOut} />
        </div>

        <Link to='/profile' >
          <img src={avatarURL} alt="Foto github usuário Raf-RM" />        
        </Link>
      </Profile>

    </Container>
  )
}