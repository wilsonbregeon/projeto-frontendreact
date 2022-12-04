import {  Button, MainCart } from "./styled";


function Cart(props) {

    return (
       <MainCart>
       <Button onClick={props.onClick}>Ir para carrinho</Button>
       </MainCart>
    )
}

export default Cart;