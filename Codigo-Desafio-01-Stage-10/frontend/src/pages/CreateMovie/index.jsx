import { useState } from 'react';

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
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

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
              {
                tags.map((tag, index) => (
                  <MovieItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <MovieItem 
                placeholder="Novo marcador" 
                isNew
                value={newTag}
                onChange={event => setNewTag(event.target.value)}
                onClick={handleAddTag}
              />
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