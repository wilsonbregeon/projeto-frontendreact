import { useState } from 'react'
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

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(productsList.productsList)

  switch (screen) {
    case 1:
      return (
        <MainApp>
          <Filters />
          <Products
            cart={cart}
            setCart={setCart}
            products={products}
          />
          <Cart
            cart={cart}
            setCart={setCart}
            products={products}
            onClick={() => changeScreen(2)} />
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
