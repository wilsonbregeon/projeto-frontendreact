//CSS Products, CardProducts

import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  width: 55vw;
  margin-top: 10px;
  display: flex;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  margin: 1em;
`

export const ArticleProducts = styled.article`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
`

export const ArticleCardProducts = styled.article`
  height: 50vh;
  margin: 0.4em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  background-color: #bdbdbd;
  font-size: larger;

  button {
    font-size: large;
    border-radius: 0.5em;
    border: none;
    margin: 0.5em;

    :hover {
      background-color: #9c8787;
      color: white;
    }

    :active {
      background-color: #fbc3c3;
    }
  }
`

export const Img = styled.img`
  margin: 3px;
  border-radius: 5px;
  height: 40vh;
  width: 13em;
  border: 1px solid black;
`
export const P = styled.p`
  margin: 3px;
`

export const Button = styled.button`
  cursor: pointer;
`
