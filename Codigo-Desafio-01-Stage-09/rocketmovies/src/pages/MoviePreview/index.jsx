import { Container, ReturnButton, Rating } from "./styles";

import { FiArrowLeft, FiClock } from "react-icons/fi";
import { IoMdStar, IoMdStarOutline} from 'react-icons/io';

import { Header } from '../../components/Header';
import { MovieTag } from '../../components/MovieTag';

export function MoviePreview(){
  return(
    <Container>
      <Header/>

      <ReturnButton>
      <FiArrowLeft/>        
        <a href="/">
          Voltar
        </a>
      </ReturnButton>

      <main>
        <header>
          <h2>Interstellar</h2>
          <Rating>
            <IoMdStar/> <IoMdStar/> <IoMdStar/> <IoMdStar/> <IoMdStarOutline/>
          </Rating>
        </header>

        <div>
          <img src="https://github.com/raf-rm.png" alt="Foto do Github usuário Raf-RM" />
          <p>Por Rafael Rodrigues Mateus</p>
          <FiClock/>
          <p>18/10/23 às 08:38</p>
        </div>

        

      </main>

    </Container>
  )
}