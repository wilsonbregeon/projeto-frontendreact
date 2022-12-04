import { useState } from 'react'
import { MainApp, GlobalStyle } from './GlobalStyle';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartPage from './components/Cart/CartPage';

function App() {
  <GlobalStyle />

  const [screen, setScreen] = useState(1);
  const changeScreen = (screen) => setScreen(screen);

  switch (screen) {
    case 1:
      return (
        <MainApp>
          <Filters />
          <Products />
          <Cart onClick={() => changeScreen(2)} />
        </MainApp>
      );

    case 2:
      return (
        <>
          <CartPage onClick={() => changeScreen(1)}/>
        </>
      );
  };
};


export default App;
