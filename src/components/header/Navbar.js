import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className="navbar-content navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex flex-column flex-md-row">
        <li className="nav-item">
          <HashLink className="nav-link" to="#about"> About </HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/"> Roadmap </HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/"> Specs </HashLink>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link" to="/"> Team </HashLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar