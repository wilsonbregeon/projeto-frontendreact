//CSS Filters

import styled from "styled-components";

export const Main = styled.main`
  background-color: #e4e4e4;
  border: 1px solid black;
  margin: 0.5em;
  padding: 0.2em;
  width: 12vw;
  height: 40vh;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  input {
    font-size: medium;
  }

  label {
    font-size: larger;
    display: flex;
  }

  select {
    font-size: medium;
    margin: 0.5em;
  }
`

export const Div = styled.div`
  margin: 0.5em;
`