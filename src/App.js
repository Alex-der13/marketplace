import React from 'react'
import Header from './components/header'
import { Home, Basket } from './screens'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const list = [
  { name: '1', sullpier: '1', price: 1, piece: 1 },
  { name: '2', sullpier: '2', price: 2, piece: 1 },
  { name: '3', sullpier: '3', price: 3, piece: 1 }

]

const test = 2

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/basket">
          <Basket list={list} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
