import { Header } from "../../components/header/header.js"
import { Description } from "../../components/description/description.js"
import { Footer } from "../../components/footer/footer.js"
import imgHome from "../../assets/imgHome.png"


export const Home = () =>{

  return(
    <>
      <Header/>
      <main>
        <Description
         title="Boas vindas a Lacrei Saúde"
         paragraph="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
         buttonOne="Pessoa Usuária"
         buttonTwo="Profissional"
         imgMain={imgHome}
       />
      <Footer/>
      </main>
    </>
  )
}