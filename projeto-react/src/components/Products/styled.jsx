//CSS Products, CardProducts

import styled from "styled-components";

export const Main = styled.main`
  height: 80vh;
  width: 75vw;
  background-color: bisque;
  border: 1px solid black;
  margin-top: 10px;
  display: flex;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;
`

export const Article = styled.article`
  height: 45vh;
  margin: 5px;
  border-radius: 5px;
  /* background-color: #a0a0d1; */
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid black;
`

export const Img = styled.img`
  margin: 3px;
  border-radius: 5px;
  height: 35vh;
`
export const P = styled.p`
  margin: 3px;
`

export const Button = styled.button`
  cursor: pointer;
`
