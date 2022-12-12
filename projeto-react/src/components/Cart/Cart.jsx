import CartCard from "./CartCard"
import { Button, MainCart } from "./styled"

function Cart(props) {
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

        <MainCart>
            <p>Carrinho:</p>
            <p>Valor total: <strong>R$ {totalPrice}</strong></p>
            <Button onClick={props.onClick}>Ir para carrinho</Button>
            {cart.map((product) => {
                return (
                    <CartCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        amount={product.amount}
                        price={product.price}
                        deleteItem={remove}
                    />
                )
            })}
        </MainCart>
    )
}

export default Cart