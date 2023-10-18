import { Container, ReturnButton } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header';
import { MovieShowPreview } from '../../components/MovieShowPreview';


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
        <div>
          <MovieShowPreview data={
            {
              user_name:"Rafael Rodrigues Mateus",
              title:"Interstellar",
              description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quaerat soluta dolore nostrum optio corporis ipsa numquam doloribus non eaque officia, in molestias, culpa, exercitationem aut autem ea dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi, ipsum, similique dignissimos eligendi maiores quibusdam, qui amet corporis consectetur reprehenderit nesciunt illo culpa fugit facere temporibus minima. Necessitatibus, rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus blanditiis suscipit quaerat veniam? Libero, cumque rerum fugit mollitia aspernatur, amet voluptatum labore quasi, assumenda quis eum deserunt numquam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa iusto! Dolor cupiditate sed recusandae optio omnis aperiam sequi, porro minima placeat. Nisi voluptatem suscipit quos accusantium numquam, assumenda consequatur!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore nulla? Consectetur dolorum sed cupiditate non impedit itaque quae iure. Vero aperiam rem culpa nulla soluta quibusdam accusantium autem aut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, facere! Impedit enim eveniet ratione explicabo harum necessitatibus aliquam tempore laboriosam fugiat cupiditate! Deserunt velit tempore placeat eum provident, aut possimus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit provident, dolor illo vero veniam nihil voluptatum, facilis, sapiente nisi at quidem repellat laborum odio non doloremque porro nostrum possimus beatae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consequuntur accusantium iure harum est vel quisquam. Facilis error, ipsum cupiditate suscipit earum aliquid sed consectetur est assumenda dolorem, aspernatur voluptatum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia rem excepturi vero eius, quae optio minus voluptates beatae veniam ducimus dignissimos nisi omnis enim deserunt sit doloremque laborum adipisci cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga dicta repudiandae voluptate consequatur adipisci dolor, totam commodi quaerat recusandae, asperiores necessitatibus, praesentium ipsum provident porro. Repellendus repudiandae similique atque mollitia?",
              created_at:"18/10/23 às 09:21",
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