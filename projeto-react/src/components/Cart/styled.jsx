//CSS Cart, CartCard, CartPage

import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid black;
  margin: 10px;
  margin-top: 180px;
  padding: 10px;
  height: 7vh;
  width: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px; 
  :hover{
    background-color: aliceblue;
  }
  cursor: pointer;
`
export const MainCart = styled.main`
    background-color: #d6b48a;
    height: 80vh;
    margin: 10px;
    width: 14vw;
    border-radius: 5px;
    border: 1px solid black;
`

export const MainCartPage = styled.main`
  height: 80vh;
  width: 50vw;
  background-color: bisque;
  border: 1px solid black;
  margin-top: 5%;
  margin-left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

export const MainCartCard = styled.main`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  margin: 2px;
  width: 13vw;
  height: 7vh;
  text-align: center;
  align-items: center;
`

export const Img = styled.img`
  height: 6vh;
  margin: 2px;
`

export const ButtonCardCart = styled.button`
  margin: 10px;
  background-color: red;
  :hover{
    background-color: #c94545;
  }
  :active{
    background-color: #a07171;
  }
  cursor: pointer;
`