import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom';

import { Input } from "../Input";

export function Header(){
  return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />      
      <Profile>
        <div>
          <span>Rafael Rodrigues Mateus</span>
          <a href="/">sair</a>
        </div>

        <Link to='/profile' >
          <img src="https://github.com/Raf-RM.png" alt="Foto github usuário Raf-RM" />        
        </Link>
      </Profile>

    </Container>
  )
}