import { Container } from "./styles";

export function ButtonText({isActive=false, icon:Icon, rote, label, ...rest}){
  return(
    <Container type="button" $isactive={isActive} {...rest} >
      <a href={rote.toString()}>
        {Icon && <Icon/>}
        {label}
      </a>
    </Container>
  )
}