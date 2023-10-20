import { Link } from "react-router-dom";
import { Container } from "./styles";

export function ButtonText({isActive=false, icon:Icon, rote, label, to, ...rest}){
  return(
    <Container type="button" $isactive={isActive} {...rest} >
      <Link to={rote.toString()}>
        {Icon && <Icon/>}
        {label}
      </Link>
    </Container>
  )
}