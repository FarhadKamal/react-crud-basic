import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import Secret from './components/Secret/Secret'
import UpdateAuth from './components/Auth/Update'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={() => <Home />} />
        <Route path='/auth' component={() => <Auth />} />
        <Route path='/secret' component={() => <Secret />} />
        <Route path='/update_auth/:id' component={() => <UpdateAuth />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
