import { Container } from "./styles";

export function Brief({title, ...rest}){
  return(
    <Container {...rest}>
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quod quaerat soluta dolore nostrum optio corporis ipsa numquam doloribus non eaque officia, in molestias, culpa, exercitationem aut autem ea dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sequi, ipsum, similique dignissimos eligendi maiores quibusdam, qui amet corporis consectetur reprehenderit nesciunt illo culpa fugit facere temporibus minima. Necessitatibus, rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus blanditiis suscipit quaerat veniam? Libero, cumque rerum fugit mollitia aspernatur, amet voluptatum labore quasi, assumenda quis eum deserunt numquam aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa iusto! Dolor cupiditate sed recusandae optio omnis aperiam sequi, porro minima placeat. Nisi voluptatem suscipit quos accusantium numquam, assumenda consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, labore nulla? Consectetur dolorum sed cupiditate non impedit itaque quae iure. Vero aperiam rem culpa nulla soluta quibusdam accusantium autem aut.</p>
    </Container>
  )
}