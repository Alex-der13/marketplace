import React from 'react'
import Header from './header'
import { Home, Basket } from './screens'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
