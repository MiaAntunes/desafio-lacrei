import { Header } from "../../components/header/header.js"
import { Description } from "../../components/description/description.js"
import { Footer } from "../../components/footer/footer.js"
import imgProfessional from "../../assets/imgProfessional.png"

export const Professional = () =>{

  return(
    <>
      <Header/>
      <main>
         <Description
          title="Profissional"
          paragraph="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
          buttonOne
          buttonTwo
          imgMain={imgProfessional} />
      <Footer/>
      </main>
    </>
  )
}