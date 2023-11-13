import { useNavigate } from "react-router";
import { goToUserPage } from "../../router/Coordenator"
import { goToProfessionalPage } from "../../router/Coordenator"

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
    <main>
      <article>
        <h2>{props.title}</h2>
        {
          props.buttonOne === true &&
          <>
             <span></span>
             <p>{props.paragraph}</p>
          </>
        }
        {
          typeof props.buttonOne === "string" && typeof props.buttonTwo === "string" ?
            <>
                 <button onClick={()=>goToUserPage(navigate)}>{props.buttonOne}</button>
                <button onClick={()=>goToProfessionalPage(navigate)}>{props.buttonTwo}</button>
            </>:
            <></>
        }
      </article>
      <article>
        <img src={props.imgMain} alt="" />
      </article>
    </main>
  )
}