import { Article, Section, Main } from "./styled";


function Products() {
    return (
        <Main>
            <p>Quantidade de produtos:</p>

            <Section>
                <Article>
                    <img className="img" src="https://picsum.photos/200/300" />
                    <p>Produto 1</p>
                    <p><button>Adicionar no carrinho</button></p>
                </Article>
                
                <Article>
                    <img className="img" src="https://picsum.photos/200/300" />
                    <p>Produto 2</p>
                    <p><button>Adicionar no carrinho</button></p>
                </Article>

                <Article>
                    <img className="img" src="https://picsum.photos/200/300" />
                    <p>Produto 3</p>
                    <p><button>Adicionar no carrinho</button></p>
                </Article>

                <Article>
                    <img className="img" src="https://picsum.photos/200/300" />
                    <p>Produto 4</p>
                    <p><button>Adicionar no carrinho</button></p>
                </Article>
            </Section>
        </Main>
    );
};

export default Products;