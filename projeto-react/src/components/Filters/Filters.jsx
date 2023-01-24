import { Div, Main } from './styled';

function Filters(props) {

    return (
        <Main>

            <h2>Filtros de busca</h2>

            <Div>
                <label htmlFor="searchProduct">Pesquisar produto:</label>
                <input
                    id='searchProduct'
                    placeholder='Pesquisar...'
                    value={props.query}
                    onChange={(e) => { props.setQuery(e.target.value) }}
                />

                <br />
                <label htmlFor="minPrice">Preço mínimo:</label>
                <input
                    id='minPrice'
                    placeholder='0'
                    value={props.minPrice}
                    onChange={(e) => { props.setMinPrice(e.target.value) }}
                    type="number"
                />

                <br />
                <label htmlFor="maxPrice">Preço máximo:</label>
                <input
                    id='maxPrice'
                    placeholder='0'
                    value={props.maxPrice}
                    onChange={(e) => { props.setMaxPrice(e.target.value) }}
                    type="number"
                />
                <label htmlFor="sortingParameter">Ordenar por: </label>
                <select
                    value={props.sortingParameter}
                    onChange={(e) => { props.setSortingParameter(e.target.value) }}
                >
                    <option value="title">Título</option>
                    <option value="price">Preço</option>
                </select>

                <select
                    value={props.order}
                    onChange={(e) => { props.setOrder(e.target.value) }}
                >
                    <option value="asc">Crescente</option>
                    <option value="desc">Decrescente</option>
                </select>
            </Div>
        </Main>
    )
}

export default Filters
