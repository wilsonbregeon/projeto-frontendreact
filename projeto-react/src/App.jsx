import { useEffect, useMemo, useState } from 'react'
import { MainApp, GlobalStyle } from './GlobalStyle'
import Filters from './components/Filters/Filters'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import CartPage from './components/Cart/CartPage'
import productsList from './productsList.json'

function App() {
  <GlobalStyle />

  //Variáveis Renderização Condicional para trocar de página
  const [screen, setScreen] = useState(1);
  const changeScreen = (screen) => setScreen(screen);

  //Variáveis utilizadas para o carrinho de compras 
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])

  //Variáveis dos filtros de busca
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState('asc')

  useEffect(() => {
    setProducts(productsList.productsList)
  }, [])

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
      })
      .filter((product) => {
        return product.price >= minPrice || minPrice === ""
      })
      .filter((product) => {
        return product.price <= maxPrice || maxPrice === ""
      })
      .sort((currentProduct, nextProduct) => {
        switch (sortingParameter) {
          case "price":
            return currentProduct.price - nextProduct.price
        }
      })
      .sort(() => {
        if (order === "asc") {
          return 0
        } else {
          return -1
        }
      })
  }, [products, query, minPrice, maxPrice, sortingParameter, order])

  switch (screen) {
    case 1:
      return (
        <MainApp>
          <Filters
            query={query}
            minPrice={minPrice}
            maxPrice={maxPrice}
            sortingParameter={sortingParameter}
            order={order}
            setQuery={setQuery}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setSortingParameter={setSortingParameter}
            setOrder={setOrder}
          />

          <Products
            cart={cart}
            setCart={setCart}
            products={filteredProducts}
          />

          <Cart
            cart={cart}
            setCart={setCart}
            products={products}
            onClick={() => changeScreen(2)}
          />
        </MainApp>
      )

    case 2:
      return (
        <>
          <CartPage
            cart={cart}
            setCart={setCart}
            onClick={() => changeScreen(1)}
          />
        </>
      )
  }
}

export default App



