import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

export function Header(){
  const { signOut } = useAuth();

  return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />      
      <Profile>
        <div>
          <span>Rafael Rodrigues Mateus</span>
          <ButtonText label="sair" rote='/' onClick={signOut} />
          {/* <a href="/">sair</a> */}
        </div>

        <Link to='/profile' >
          <img src="https://github.com/Raf-RM.png" alt="Foto github usuário Raf-RM" />        
        </Link>
      </Profile>

    </Container>
  )
}