import { MainCartCard, Img, ButtonCardCart} from "./styled"

function CartCard({
    id,
    url,
    name,
    amount,
    price,
    deleteItem
}) {
    return (
        <MainCartCard>
            
            <Img src={url} alt="" />
            <p>{name}</p>
            <p><strong>Qtd: </strong>{amount}</p>
            <p>R$: {price}</p>
            <ButtonCardCart onClick={() => deleteItem(id)}>x</ButtonCardCart>
            
        </MainCartCard>
    )
}

export default CartCard