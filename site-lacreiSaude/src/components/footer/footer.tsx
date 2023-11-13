import { useNavigate } from "react-router"
import { goToUserPage } from "../../router/Coordenator"
import { goToHomePage } from "../../router/Coordenator"
import { goToProfessionalPage } from "../../router/Coordenator"
import FacebookLogo from "../../assets/FacebookLogo.svg"
import InstagramLogo from "../../assets/InstagramLogo.svg"
import LinkedinLogo from "../../assets/LinkedinLogo.svg"

export const Footer = () =>{
  const navigate = useNavigate()

  return(
    <footer>
      <article>
        <nav>
        <ul>
          {
            location.pathname === "/" ?
            <li>
               <a style={{fontWeight:"bold"}} onClick={()=>goToHomePage(navigate)}>Home</a>
            </li>
            :
            <li>
               <a  onClick={()=>goToHomePage(navigate)}>Home</a>
            </li>
          }
          {
            location.pathname.includes("user") ?
          <li>
            <a style={{fontWeight:"bold"}} onClick={()=>goToUserPage(navigate)} >Pessoa usuária</a>
          </li>
          :
          <li>
            <a onClick={()=>goToUserPage(navigate)} >Pessoa usuária</a>
          </li>
          }
          {
             location.pathname.includes("professional") ?
              <li>
                 <a style={{fontWeight:"bold"}} onClick={()=>goToProfessionalPage(navigate)}>Profissional</a>
              </li>
              :
              <li>
                 <a onClick={()=>goToProfessionalPage(navigate)}>Profissional</a>
              </li>
          }
        </ul>
        </nav>
      </article>
      <article>
        <a href="https://www.facebook.com/lacrei.saude/">
          <img src={FacebookLogo} alt="Link para Facebook" />
        </a>
        <a href="https://www.instagram.com/lacrei.saude/">
          <img src={InstagramLogo} alt="Link para Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/lacrei-saude/">
          <img src={LinkedinLogo} alt="Link para Linkedin" />
        </a>
      </article>
      <p>Desafio Front-end Lacrei feito por Camila Antunes</p>
    </footer>
  )
}