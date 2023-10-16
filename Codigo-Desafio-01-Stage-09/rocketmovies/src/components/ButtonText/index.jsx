import { Container } from "./styles";

export function ButtonText({label, ...rest}){
  return(
    <Container type="button" {...rest} >
      {label}
    </Container>
  )
}