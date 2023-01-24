//CSS Cart, CartCard, CartPage

import styled from "styled-components";

export const Button = styled.button`
  font-size: large;
  border: 1px solid black;
  margin: 0.5em;
  padding: 0.6em;
  border-radius: 5px; 
  :hover{
    background-color: aliceblue;
  }
  cursor: pointer;
`

export const ButtonCardCart = styled.button`
  margin-right: 0.5em;
  background-color: #ca7373;
  :hover{
    background-color: #c94545;
  }
  :active{
    background-color: #a07171;
  }
  cursor: pointer;
`

export const MainCart = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #e4e4e4;
    height: 100vh;
    margin: 0.5em;
    width: 18vw;
    border-radius: 5px;
    border: 1px solid black;
    justify-content: flex-start;
    align-items: center;
`

export const MainCartPage = styled.main`
  height: 80vh;
  width: 50vw;
  background-color: #e4e4e4;
  border: 1px solid black;
  margin-top: 5%;
  margin-left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
 
  button {
    font-size: large;
    cursor: pointer;
  }
`

export const MainCartCard = styled.main`
  background-color: #ebf8f3;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  margin: 0.5em;
  width: 17em;
  height: 7vh;
  text-align: center;
  align-items: center;
  font-size: large;
`

export const Img = styled.img`
  height: 3.5em;
  width: 3.5em;
`