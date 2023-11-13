import { useNavigate } from "react-router"
import { goToUserPage } from "../../router/Coordenator"
import { goToHomePage } from "../../router/Coordenator"
import { goToProfessionalPage } from "../../router/Coordenator"

export const Header = () =>{
  const navigate = useNavigate()

  return(
    <header>
      <h1>Lacrei</h1>
      <nav>
        <ul>
          <li>
            <button onClick={()=>goToHomePage(navigate)}>Home</button>
          </li>
          <li>
            <button onClick={()=>goToProfessionalPage(navigate)}>Pessoa Usuária</button>
          </li>
          <li>
            <button onClick={()=>goToUserPage(navigate)} >Profissional</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}