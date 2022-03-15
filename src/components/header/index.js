import React from 'react'

import Logo from './Logo'
import Navbar from './Navbar'
import LoginBtn from './LoginBtn'

const Index = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Logo />
          <Navbar />
          <LoginBtn />
        </div>
      </nav>
    </header>
  )
}

export default Index