import { FiPlus } from 'react-icons/fi';

import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Brief } from '../../components/Brief';

export function Home(){
  return(
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus filmes</h1>
          <Button label='Adicionar filme'/>
        </header>
        <div>
          <Brief title='Interestellar'/>
          <Brief title='Interestellar'/>
          <Brief title='Interestellar'/>
          <Brief title='Interestellar'/>
          <Brief title='Interestellar'/>
        </div>
      </main>
      
    </Container>
  )
}