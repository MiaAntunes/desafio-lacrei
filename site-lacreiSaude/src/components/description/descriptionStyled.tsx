import styled from "styled-components";


export const MainGlobal =styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFF;
  gap: 2em;
  padding: .5em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  padding: 1em 3em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  padding: 1em 4em;
  flex-direction: row;
  justify-content: space-between;
  }

  @media screen and (min-width: 2001px) {
  padding: 1em 5em;
  flex-direction: row;
  justify-content: space-between;
  }

`

export const ArticleOne = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  gap: 1em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  gap: 2em;
  }

  @media screen and (min-width: 2001px) {
  gap: 2em;
  }
`

export const TitleArticle = styled.h2`
color: #1F1F1F;
font-family: Nunito;
font-size: 1.5em;
font-style: normal;
font-weight: 700;
line-height: normal;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  margin-top: .5em;
  font-size: 2em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  margin-top: .5em;
  font-size: 3em;
  width: 80%;
  }

  @media screen and (min-width: 2001px) {
  margin-top: .5em;
  font-size: 3em;
  width: 80%;
  }
`

export const ContainerParagraph = styled.div`
   display: flex;
   gap: 1.5em;
   align-items: center;

  @media screen and (min-width: 2001px) {
   gap: 2em;
  }
`

export const LineSpan = styled.span`
width: 5px;
height: 6em;
flex-shrink: 0;
background: #018762;
  @media screen and (min-width: 801px) and (max-width: 1200px) {
height: 4em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
height: 10em;
  }

  @media screen and (min-width: 2001px) {
height: 8em;
  }
`

export const ParagraphArticle = styled.p`
  color: #515151;
  font-family: Nunito;
  font-size: .9em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  font-size: 1em;
  }

  @media screen and (min-width: 1201px)  {
  font-size: 1.5em;
  width: 80%;
  }

  @media screen and (min-width: 2001px) {
   font-size: 1.5em;
   width: 40%;
  }

`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  margin-top:2em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  flex-direction: row;
  justify-content: space-between;
  }

  @media screen and (min-width: 1201px) {
  flex-direction: row;
  gap: 5em;
  margin-top:0;
  }


`

export const ButtonOne = styled.button`
border-radius: 8px;
background: #018762;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 10em;
height: 2.5em;
color: white;
font-size: 1.2em;
font-weight: 700;
font-family: Nunito;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
   width: 10em;
   font-size: 1.3em;
  }

  @media screen and (min-width: 1201px) {
   width: 10em;
   height: 2.5em;
   font-size: 1.2em;
  }

`

export const ButtonTwo = styled.button`
border-radius: 8px;
border: 2px solid #018762;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 10em;
height: 2.5em;
font-size: 1.2em;
color:#018762 ;
font-family: Nunito;
font-weight: 700;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
   width: 10em;
   font-size: 1.3em;
  }

  @media screen and (min-width: 1201px) {
   width: 10em;
   height: 2.5em;
   font-size: 1.2em;
  }

`

export const ArticlePhoto = styled.article`

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 100%;
  }

`

export const ImgArticle = styled.img`
width: 25em;
margin: 1em 0;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    margin: 0 0;
    width: 35em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    margin: 0 0;
    width: 30em;
  }

  @media screen and (min-width: 2001px) {
    margin: 0 0;
    width: 38em;
  }
`