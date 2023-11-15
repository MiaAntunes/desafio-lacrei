import { useNavigate } from "react-router";
import { goToUserPage } from "../../router/Coordenator"
import { goToProfessionalPage } from "../../router/Coordenator"
import { ArticleOne, ArticlePhoto, ButtonOne, ButtonTwo, ContainerButton, ContainerParagraph, ImgArticle, LineSpan, MainGlobal, ParagraphArticle, TitleArticle } from "./descriptionStyled";

interface MainProps {
  title: string;
  paragraph: string;
  buttonOne: string | true;
  buttonTwo: string | true;
  imgMain: string;
}

export const Description:React.FC<MainProps> = (props) =>{
    const navigate = useNavigate()
  //Fazer um curto-circuito para o button
  return(
    <MainGlobal>
      <ArticleOne>
        <TitleArticle>{props.title}</TitleArticle>
        {
          props.buttonOne === true ?
          <ContainerParagraph>
             <LineSpan></LineSpan>
             <ParagraphArticle>{props.paragraph}</ParagraphArticle>
          </ContainerParagraph>:
          <>
             <ParagraphArticle>{props.paragraph}</ParagraphArticle>
          </>
        }
        {
          typeof props.buttonOne === "string" && typeof props.buttonTwo === "string" ?
            <ContainerButton>
                 <ButtonOne onClick={()=>goToUserPage(navigate)}>{props.buttonOne}</ButtonOne>
                <ButtonTwo onClick={()=>goToProfessionalPage(navigate)}>{props.buttonTwo}</ButtonTwo>
            </ContainerButton>:
            <></>
        }
      </ArticleOne>
      <ArticlePhoto>
        <ImgArticle src={props.imgMain} alt="" />
      </ArticlePhoto>
    </MainGlobal>
  )
}