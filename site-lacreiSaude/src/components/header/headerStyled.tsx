import styled from "styled-components";

export const HeaderGlobal = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EEE;
  gap: .2em;
  padding: .5em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
  padding: 1em 3em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
  padding: 1em 4em;
  }

  @media screen and (min-width: 2001px) {
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
  padding: 1em 5em;
  }
`

export const TitleHeader = styled.h1`
color: #018762;
font-family: Nunito;
font-size: 2em;
font-style: normal;
font-weight: 700;
line-height: normal;

  @media screen and (max-width: 800px) {
font-size: 2.1em;
  }

  @media screen and (min-width: 801px) and (max-width: 1200px) {
font-size: 2.2em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
font-size: 2.3em;
  }

  @media screen and (min-width: 2001px) {
font-size: 2.5em;
  }
`

export const ListNav = styled.ul`
display: flex;
gap: 1em;

`



export const LinkNav = styled.a`
color: #1F1F1F;
font-family: Nunito;
font-size: .9em;
font-style: normal;
font-weight: 700;
line-height: normal;


  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: 1em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    font-size: 1em;
  }

  @media screen and (min-width: 2001px) {
   font-size: 1.2em;
  }
`

