import { Container, Rating } from "./styles";
import { IoMdStar, IoMdStarOutline} from 'react-icons/io';
import { FiClock } from "react-icons/fi";
import { MovieTag } from "../MovieTag";


export function MovieShowPreview({data, ...rest}){
  return(
    <Container {...rest}>
      <header>
        <h2>{data.title}</h2>
        <Rating>
          <IoMdStar/> <IoMdStar/> <IoMdStar/> <IoMdStar/> <IoMdStarOutline/>
        </Rating>
      </header>
      <div>
          <img src="https://github.com/raf-rm.png" alt="Foto do Github usuário Raf-RM" />
          <p>Por {data.user_name}</p>
          <FiClock/>
          <p>{data.created_at}</p>
      </div>
      {
        data.tags && 
        <footer>
          {
          data.tags.map(tag => <MovieTag title={tag.name} key={tag.id} />)
          }
        </footer>
      }
      <content>
        <p>{data.description}</p>
      </content>
    </Container>
  )
}