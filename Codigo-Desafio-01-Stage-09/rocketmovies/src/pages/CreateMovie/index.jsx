import {FiArrowLeft} from 'react-icons/fi';

import { Container, Form, ReturnButton} from "./styles";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { ButtonText } from "../../components/ButtonText";
import { Button } from '../../components/Button';

export function CreateMovie(){
  return(
    <Container>
      <Header/>
      <ReturnButton>
          <FiArrowLeft/>
          <ButtonText $isactive label="Voltar"/>
      </ReturnButton>
      <main>
        <Form>
          <h1>Novo Filme</h1>
          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <section>
            <h2>Marcadores</h2>
            <div>
              <div className="tags">

              </div>
            </div>
          </section>
          <div>
            <Button label="Excluir filme" />
            <Button label="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}