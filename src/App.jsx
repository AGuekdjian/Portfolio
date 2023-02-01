import React from 'react'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './routes/Navigation'

function App() {
  return (
    <Router>
      <Nav />
      <Navigation />
      <Footer />
    </Router>
  )
}

export default App
