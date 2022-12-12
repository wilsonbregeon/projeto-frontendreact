import CardProducts from "./CardProducts"
import { Article, Section, Main, Img, P } from "./styled"

function Products(props) {
    const { cart, setCart, products } = props

    function buy(id) {
        const i = cart.findIndex((item) => item.id === id)
        if (i !== -1) {
            const newCart = [...cart]
            newCart[i] = {
                ...newCart[i],
                amount: newCart[i].amount + 1
            }
            setCart(newCart)
        } else {
            const searchProduct = products.find((product) => product.id === id)
            const newProduct = { ...searchProduct, amount: 1 }
            const newList = [...cart, newProduct]
            setCart(newList)
        }
    }

    return (
        <Main>
            <P>Quantidade de produtos:</P>

            <Section>
                <Article>
                    {products.map((product) => {
                        return <CardProducts 
                        
                        product={product} 
                        key={product.id} 
                        buy={buy} 
                        />
                    })}
                </Article>
            </Section>
        </Main>
    )
}

export default Products