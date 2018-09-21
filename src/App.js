import React, { Component } from 'react'
import './style/App.scss'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Navigation from './components/Navigation'
import Screenshot from './components/Screenshot'
import Contact from './components/Contact'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  render() {
    return (
      <div className="app">
          <BrowserRouter>
            <div>
              <Navigation/>
              <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/features'  component={ Features } />
                <Route path='/gallery'  component={ Gallery } />
                <Route path='/screenshot'  component={ Screenshot } />
                <Route path='/contact'  component={ Contact } />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default App;
