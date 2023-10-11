import { Container } from "./styles";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export function Details(){
  return(
    <Container>
      <Header/>
      <Button label="Entrar" ></Button>
      <main>
        Minha Main
      </main>
    </Container>
  )
}