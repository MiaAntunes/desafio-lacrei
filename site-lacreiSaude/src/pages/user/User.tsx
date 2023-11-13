import { Header } from "../../components/header/header.js"
import { Description } from "../../components/description/description.js"
import { Footer } from "../../components/footer/footer.js"
import imgUser from "../../assets/imgUser.png"

export const User = () =>{

  return(
    <>
      <Header/>
      <main>
      <Description
      title="Pessoa Usuária"
      paragraph="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
      buttonOne
      buttonTwo
      imgMain={imgUser} />
      <Footer/>
      </main>
    </>
  )
}