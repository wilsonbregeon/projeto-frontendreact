import React from "react"
import CartCard from "./CartCard"
import { MainCartPage } from "./styled"

function CartPage(props) {
    const { cart, setCart } = props

    let totalPrice = 0
    cart.map((item) => (totalPrice = totalPrice + item.price * item.amount))

    function remove(id) {
        const product = cart && cart.find((item) => item.id === id)

        if (product.amount > 1) {
            const newCart = cart.map((item) => {
                if (product.id === item.id && item.amount >= 1) {
                    return { ...item, amount: item.amount - 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            const cartWithoutItem = cart.filter((item) => item.id !== id)
            setCart(cartWithoutItem)
        }
    }

    return (
        <MainCartPage>
            <h1>Carrinho:</h1>
            {cart.map((product) => {
                return (
                    <CartCard 
                    url={product.url}
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    amount={product.amount}
                    price={product.price}
                    deleteItem={remove}
                    />
                )
            })}
            <h3>Preço total: R${totalPrice}</h3>
            <button onClick={props.onClick} >Voltar para página inicial</button>
        </MainCartPage>
    )
}

export default CartPage




