import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import {FiArrowLeft} from 'react-icons/fi';

import { Container, Form} from "./styles";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { MovieItem } from '../../components/MovieItem';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function NewMovie(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie(){
    await api.post("/movies", {title, description, rating, tags});
    alert("Filme adicionado com sucesso!");
    navigate("/");
  }

  function handleRemoveMovie(){
    setDescription("");
    setRating("");
    setTitle("");
    setNewTag("");
    setTags([]);
    console.log(title, rating, description, tags, newTag)
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
            <Input placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <Input placeholder="Sua nota (de 0 a 5)"
              value={rating}
              onChange={event => setRating(event.target.value)}
            />
          </div>
          <TextArea placeholder="Observações"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
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
            <Button
              label="Excluir filme"
              onClick={handleRemoveMovie}
            />
            <Button 
              label="Salvar alterações"
              onClick={handleNewMovie}
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}