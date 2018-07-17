import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header class="top-nav">
      <Link to="/">List View</Link>
      <Link to="/about-us">Map View</Link>
    </header>

    <button type="button" className="btn btn-default">Default</button>
    <button type="button" className="btn btn-primary">Primary</button>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App;
