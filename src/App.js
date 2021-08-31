import React, { useState } from 'react'
import Header from './components/header'
import { Home, Basket } from './screens'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Category from './screens/category/Category'

const App = () => {
  const [basketList, setBasketList] = useState([])

  const addBasket = (product) => {
    setBasketList([...basketList, product])
  }

  const deleteFromBasket = (productId) => {
    setBasketList(basketList.filter((item) => item.ItemId !== productId))
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/basket">
          <Basket
            basketList={basketList}
            deleteFromBasket = {deleteFromBasket}
          />
        </Route>
        <Route path="/category/:name">
          <Category
            addBasket={addBasket}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
