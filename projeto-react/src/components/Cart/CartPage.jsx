import React from "react";
import {  MainCartPage } from "./styled";

function CartPage(props) {
    return (
        <MainCartPage>
            <p>carrinho</p>
            <button onClick={props.onClick} >Voltar para página inicial</button>
        </MainCartPage>
    );
};

export default CartPage;

