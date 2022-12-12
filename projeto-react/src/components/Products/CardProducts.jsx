import { Article, Button, Section, Img, Main } from "./styled"

function CardProducts(props) {
    const { product, buy } = props

    return (

        <Article>
            <Section>
                <Img src={product.url} />
                {product.name} <br />
                R$: {product.price}
                <Button onClick={() => buy(product.id)}>Adicionar no carrinho</Button>
            </Section>
        </Article>
    )
}

export default CardProducts