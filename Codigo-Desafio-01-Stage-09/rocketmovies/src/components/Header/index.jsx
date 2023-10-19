import { Container, Profile } from "./styles";

import { Input } from "../Input";
import { ButtonText } from "../ButtonText";

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

        <img src="https://github.com/Raf-RM.png" alt="Foto github usuário Raf-RM" />
      </Profile>

    </Container>
  )
}