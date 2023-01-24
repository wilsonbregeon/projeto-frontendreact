import { ArticleCardProducts, Button, Section, Img } from "./styled"

function CardProducts(props) {
    const { product, buy } = props

    return (

        <ArticleCardProducts>
            <Section>
                <Img src={product.url} />
                {product.name} <br />
                R$: {product.price}
                <Button onClick={() => buy(product.id)}>Adicionar no carrinho</Button>
            </Section>
        </ArticleCardProducts>
    )
}

export default CardProducts