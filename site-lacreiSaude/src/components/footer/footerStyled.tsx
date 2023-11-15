import styled from "styled-components";

export const FooterGlobal = styled.footer`
  padding: .5em;


  @media screen and (min-width: 801px) and (max-width: 1200px) {
  padding: 1em 3em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  padding: 1em 4em;
  }

  @media screen and (min-width: 2001px) {
  padding: 1em 5em;
  }
`

export const ArticleNav = styled.article`
  border-top: 1px solid  #B0E0D3;
  padding: 1em 0;



  @media screen and (min-width: 801px) and (max-width: 2000px)  {
  padding: 2em 0;
  }

  @media screen and (min-width: 2001px) {
  padding: 2.2em 0;
  }
`

export const ListNavFooter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .5em;
  overflow: hidden;
  text-decoration:none;



  @media screen and (min-width: 801px) and (max-width: 2000px) {
  gap: 2em;
  flex-direction: row;
  }

  @media screen and (min-width: 2001px) {
  gap: 2.5em;
  flex-direction: row;
  }
`

export const LinkNavFooter= styled.a`
  color: #1F1F1F;
  font-family: Nunito;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;


  @media screen and (min-width: 801px) and (max-width: 2000px) {
  font-size: 1.1em;
  }

  @media screen and (min-width: 2001px) {
  font-size: 1.2em;
  }
`

export const ArticleMidiasSociais = styled.article`
  display: flex;
  gap: 1.8em;
  overflow: hidden;


  @media screen and (min-width: 801px) {
  gap: 2em;
  }
`

export const ImgMidiasSociais = styled.img`
  width: 2.5em;


  @media screen and (min-width: 801px) and (max-width: 1200px) {
  width: 2.3em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  width: 2em;
  }

  @media screen and (min-width: 2001px) {
  width: 2.3em;
  }
`

export const Paragraph = styled.p`
  color: #515151;
  font-family: Nunito;
  font-size: 0.75em;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1em;


  @media screen and (min-width: 801px)  {
  font-size: 0.75em;
  margin-top: 1.5em;
  }

  @media screen and (min-width: 2001px) {
  font-size: 0.95em;
  margin-top: 1.5em;
  }
`