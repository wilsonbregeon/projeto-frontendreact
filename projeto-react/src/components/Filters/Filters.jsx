import { useState } from 'react'
import { useForm } from "../../hooks/useForm"
import { Button, Form, Label, Main } from './styled';

function Filters() {

    const [formulario, onChange] = useForm({
        minValue: "",
        maxValue: "",
        searchProduct: ""
    });

    const handleClick = (event) => {
        event.preventDefault();
        console.log(formulario)
    };
    

    return (
        <Main>
            <h2>Filtros de busca</h2>

            <Form onSubmit={handleClick}>
                 <p><label htmlFor="minValue">Valor mínimo:</label></p>
                <input
                    name="minValue"
                    id="minValue"
                    value={formulario.minValue}
                    onChange={onChange}
                    type="number"
                >
                </input>

                <p><label htmlFor="maxValue">Valor máximo:</label></p> 
                <input
                    name="maxValue"
                    id="maxValue"
                    value={formulario.maxValue}
                    onChange={onChange}
                    type="number"
                />

                <p><label htmlFor="searchProduct">Buscar produto:</label></p> 
                <input
                    name="searchProduct"
                    id="searchProduct"
                    value={formulario.searchProduct}
                    onChange={onChange}
                    type="text"
                />

                <p><Label htmlFor="ordenation">Ordenação:</Label></p> 
                <select name="" id="ordenation">
                    <option value="crescent">Crescente</option>
                    <option value="decrescent">Decrescente</option>
                </select>

                <Button type="submit">Buscar</Button>
            </Form>
        </Main>
        
    );

}

export default Filters;
