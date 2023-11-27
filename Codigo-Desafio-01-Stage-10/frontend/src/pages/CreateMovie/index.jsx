import {FiArrowLeft} from 'react-icons/fi';

import { Container, Form} from "./styles";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { MovieItem } from '../../components/MovieItem';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function CreateMovie(){
  return(
    <Container>
      <Header/>
      <div>
        <ButtonText label='Voltar' rote='/' icon={FiArrowLeft}/>        
      </div>
      <main>
        <Form>
          <h1>Novo Filme</h1>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <Section title="Marcadores">
            <div className="tags">
              <MovieItem  value="Terror"/>
              <MovieItem  value="Suspense"/>
              <MovieItem  value="Ficção"/>
              <MovieItem placeholder="Novo marcador" isNew/>
            </div>
          </Section>
          <div>
            <Button label="Excluir filme" />
            <Button label="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}