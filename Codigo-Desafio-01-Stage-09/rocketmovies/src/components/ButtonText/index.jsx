import { Container } from "./styles";

export function ButtonText({isActive=false, icon:Icon, label, ...rest}){
  return(
    <Container type="button" $isactive={isActive} {...rest} >
      {Icon && <Icon/>}
      {label}
    </Container>
  )
}