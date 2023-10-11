import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header(){
  return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />      
      <Profile>
        <div>
          <span>Rafael Rodrigues Mateus</span>
          <p>sair</p>
        </div>

        <img src="https://github.com/Raf-RM.png" alt="Foto github usuário Raf-RM" />
      </Profile>

    </Container>
  )
}