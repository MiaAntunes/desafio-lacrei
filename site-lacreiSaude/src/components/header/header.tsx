import { useNavigate } from "react-router"
import { goToUserPage } from "../../router/Coordenator"
import { goToHomePage } from "../../router/Coordenator"
import { goToProfessionalPage } from "../../router/Coordenator"
import { HeaderGlobal, LinkNav, ListNav, TitleHeader } from "./headerStyled"

export const Header = () =>{
  const navigate = useNavigate()

  return(
    <HeaderGlobal>
      <TitleHeader>Lacrei</TitleHeader>
      <nav>
        <ListNav>
          <li>
            <LinkNav onClick={()=>goToHomePage(navigate)}>Home</LinkNav>
          </li>
          <li>
            <LinkNav onClick={()=>goToUserPage(navigate)}>Pessoa Usuária</LinkNav>
          </li>
          <li>
            <LinkNav onClick={()=>goToProfessionalPage(navigate)} >Profissional</LinkNav>
          </li>
        </ListNav>
      </nav>
    </HeaderGlobal>
  )
}