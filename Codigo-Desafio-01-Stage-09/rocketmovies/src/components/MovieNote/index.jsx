import { Container, Rating } from "./styles";
import { IoMdStar, IoMdStarOutline} from 'react-icons/io';

import { MovieTag } from '../MovieTag'

export function MovieNote({ data, ...rest}){
  return(
    <Container {...rest}>
      <h2>{data.title}</h2>
      
      <Rating>
        <IoMdStar/><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStarOutline/>
      </Rating>

      <p>{data.description}</p>
      
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <MovieTag title={tag.name} key={tag.id} />)        
          }
        </footer>
      }
      
    </Container>
  )
}