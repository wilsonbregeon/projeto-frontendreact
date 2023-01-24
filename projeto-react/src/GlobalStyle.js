import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: blueviolet;
    }
`

export const MainApp = styled.main`
    display: flex;
    justify-content: space-evenly;
    background-color: aliceblue;
    height: 160vh;
`

