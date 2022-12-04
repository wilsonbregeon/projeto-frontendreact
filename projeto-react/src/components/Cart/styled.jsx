import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid black;
  margin: 10px;
  margin-top: 250px;
  padding: 10px;
  height: 6vh;
  width: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px; 
  :hover{
    background-color: aliceblue;
  }
  cursor: pointer;
`
export const MainCart = styled.main`
    background-color: #f49726;
    height: 40vh;
    margin: 10px;
    width: 11vw;
    border-radius: 5px;
    border: 1px solid black;
`

export const MainCartPage = styled.main`
  height: 80vh;
  width: 50vw;
  background-color: bisque;
  border: 1px solid black;
  margin-top: 10px;
  margin-left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`