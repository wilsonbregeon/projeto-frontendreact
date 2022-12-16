import { Button, Form, Label, Main } from './styled';

function Filters(props) {

    return (
        <Main>

            <h2>Filtros de busca</h2>
            <input
                placeholder='Pesquisar produto'
                value={props.query}
                onChange={(e) => { props.setQuery(e.target.value) }}
            />

            <input
                placeholder='Preço Mínimo'
                value={props.minPrice}
                onChange={(e) => { props.setMinPrice(e.target.value) }}
                type="number"
            />

            <input
                placeholder='Preço Máximo'
                value={props.maxPrice}
                onChange={(e) => { props.setMaxPrice(e.target.value) }}
                type="number"
            />

            <label for="sortingParameter">Ordenar por: </label>
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

        </Main>
    )
}

export default Filters
