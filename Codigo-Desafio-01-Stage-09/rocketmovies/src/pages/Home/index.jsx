import { FiPlus } from 'react-icons/fi';
//import { IoMdStar, IoMdStarOutline} from 'react-icons/io';


import { Container } from "./styles";

import { Header } from '../../components/Header';
//import { Button } from '../../components/Button';
import { MovieNote } from '../../components/MovieNote';

export function Home(){
  return(
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus filmes</h1>
          <a href="/">
            <FiPlus/>
            Adicionar filme
          </a>
        </header>
        <div>
          <MovieNote data={ 
            { 
              title:"Interstellar", 
              description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quaerat soluta dolore nostrum optio corporis ipsa numquam doloribus non eaque officia, in molestias, culpa, exercitationem aut autem ea dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi, ipsum, similique dignissimos eligendi maiores quibusdam, qui amet corporis consectetur reprehenderit nesciunt illo culpa fugit facere temporibus minima. Necessitatibus, rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus blanditiis suscipit quaerat veniam? Libero, cumque rerum fugit mollitia aspernatur, amet voluptatum labore quasi, assumenda quis eum deserunt numquam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa iusto! Dolor cupiditate sed recusandae optio omnis aperiam sequi, porro minima placeat. Nisi voluptatem suscipit quos accusantium numquam, assumenda consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore nulla? Consectetur dolorum sed cupiditate non impedit itaque quae iure. Vero aperiam rem culpa nulla soluta quibusdam accusantium autem aut.",
              tags:[
                {id:'1', name:'Ficção Científica'},
                {id:'2', name:'Drama'},
                {id:'3', name:'Família'}
              ]
            }
          }/>
          <MovieNote data={ 
            { 
              title:"Interstellar", 
              description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quaerat soluta dolore nostrum optio corporis ipsa numquam doloribus non eaque officia, in molestias, culpa, exercitationem aut autem ea dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi, ipsum, similique dignissimos eligendi maiores quibusdam, qui amet corporis consectetur reprehenderit nesciunt illo culpa fugit facere temporibus minima. Necessitatibus, rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus blanditiis suscipit quaerat veniam? Libero, cumque rerum fugit mollitia aspernatur, amet voluptatum labore quasi, assumenda quis eum deserunt numquam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa iusto! Dolor cupiditate sed recusandae optio omnis aperiam sequi, porro minima placeat. Nisi voluptatem suscipit quos accusantium numquam, assumenda consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore nulla? Consectetur dolorum sed cupiditate non impedit itaque quae iure. Vero aperiam rem culpa nulla soluta quibusdam accusantium autem aut.",
              tags:[
                {id:'1', name:'Ficção Científica'},
                {id:'2', name:'Drama'},
                {id:'3', name:'Família'}
              ]
            }
          }/>
          <MovieNote data={ 
            { 
              title:"Interstellar", 
              description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quaerat soluta dolore nostrum optio corporis ipsa numquam doloribus non eaque officia, in molestias, culpa, exercitationem aut autem ea dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi, ipsum, similique dignissimos eligendi maiores quibusdam, qui amet corporis consectetur reprehenderit nesciunt illo culpa fugit facere temporibus minima. Necessitatibus, rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus blanditiis suscipit quaerat veniam? Libero, cumque rerum fugit mollitia aspernatur, amet voluptatum labore quasi, assumenda quis eum deserunt numquam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa iusto! Dolor cupiditate sed recusandae optio omnis aperiam sequi, porro minima placeat. Nisi voluptatem suscipit quos accusantium numquam, assumenda consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore nulla? Consectetur dolorum sed cupiditate non impedit itaque quae iure. Vero aperiam rem culpa nulla soluta quibusdam accusantium autem aut.",
              tags:[
                {id:'1', name:'Ficção Científica'},
                {id:'2', name:'Drama'},
                {id:'3', name:'Família'}
              ]
            }
          }/>
          <MovieNote data={ 
            { 
              title:"Interstellar", 
              description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quaerat soluta dolore nostrum optio corporis ipsa numquam doloribus non eaque officia, in molestias, culpa, exercitationem aut autem ea dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi, ipsum, similique dignissimos eligendi maiores quibusdam, qui amet corporis consectetur reprehenderit nesciunt illo culpa fugit facere temporibus minima. Necessitatibus, rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus blanditiis suscipit quaerat veniam? Libero, cumque rerum fugit mollitia aspernatur, amet voluptatum labore quasi, assumenda quis eum deserunt numquam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa iusto! Dolor cupiditate sed recusandae optio omnis aperiam sequi, porro minima placeat. Nisi voluptatem suscipit quos accusantium numquam, assumenda consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore nulla? Consectetur dolorum sed cupiditate non impedit itaque quae iure. Vero aperiam rem culpa nulla soluta quibusdam accusantium autem aut.",
              tags:[
                {id:'1', name:'Ficção Científica'},
                {id:'2', name:'Drama'},
                {id:'3', name:'Família'}
              ]
            }
          }/>
          
        </div>
      </main>
      
    </Container>
  )
}