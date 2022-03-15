import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Logo = () => {
  return (
    <HashLink className="logo navbar-brand" to="#welcome">
      <h1> CANNABIS <br /> GROWERS CLUB </h1>
    </HashLink>
  )
}

export default Logo