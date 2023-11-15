import { useNavigate } from "react-router"
import { goToUserPage } from "../../router/Coordenator"
import { goToHomePage } from "../../router/Coordenator"
import { goToProfessionalPage } from "../../router/Coordenator"
import FacebookLogo from "../../assets/FacebookLogo.svg"
import InstagramLogo from "../../assets/InstagramLogo.svg"
import LinkedinLogo from "../../assets/LinkedinLogo.svg"
import { ArticleMidiasSociais, ArticleNav, FooterGlobal, ImgMidiasSociais, LinkNavFooter, ListNavFooter, Paragraph } from "./footerStyled"

export const Footer = () =>{
  const navigate = useNavigate()

  return(
    <FooterGlobal>
      <ArticleNav>
        <nav>
          <ListNavFooter>
          {

            location.pathname === "/" ?
            <li>
               <LinkNavFooter style={{fontWeight:"bold"}} onClick={()=>goToHomePage(navigate)}>Home</LinkNavFooter>
            </li>
            :
            <li>
               <LinkNavFooter  onClick={()=>goToHomePage(navigate)}>Home</LinkNavFooter>
            </li>
          }
          {
            location.pathname.includes("user") ?
          <li>
            <LinkNavFooter style={{fontWeight:"bold"}} onClick={()=>goToUserPage(navigate)} >Pessoa usuária</LinkNavFooter>
          </li>
          :
          <li>
            <LinkNavFooter onClick={()=>goToUserPage(navigate)} >Pessoa usuária</LinkNavFooter>
          </li>
          }
          {
             location.pathname.includes("professional") ?
              <li>
                 <LinkNavFooter style={{fontWeight:"bold"}} onClick={()=>goToProfessionalPage(navigate)}>Profissional</LinkNavFooter>
              </li>
              :
              <li>
                 <LinkNavFooter onClick={()=>goToProfessionalPage(navigate)}>Profissional</LinkNavFooter>
              </li>
          }
        </ListNavFooter>
        </nav>
      </ArticleNav>
      <ArticleMidiasSociais>
        <a href="https://www.facebook.com/lacrei.saude/">
          <ImgMidiasSociais src={FacebookLogo} alt="Link para Facebook" />
        </a>
        <a href="https://www.instagram.com/lacrei.saude/">
          <ImgMidiasSociais src={InstagramLogo} alt="Link para Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/lacrei-saude/">
          <ImgMidiasSociais src={LinkedinLogo} alt="Link para Linkedin" />
        </a>
      </ArticleMidiasSociais>
      <Paragraph>Desafio Front-end Lacrei feito por Camila Antunes</Paragraph>
    </FooterGlobal>
  )
}