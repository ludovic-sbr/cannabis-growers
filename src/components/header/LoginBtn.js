import React from 'react'
import meLogo from '../../assets/magiceden_logo.png'
import { FaTwitter } from 'react-icons/fa'

const LoginBtn = () => {
  return (
    <div className="header-btn">
      <a href="https://magiceden.io/" target="_blank" rel="noreferrer">
        <button className="me-btn">
          <img src={meLogo} alt="meLogo" style={{height: '16px'}} />
        </button>
      </a>
      <a href="https://twitter.com/SolCGrowersClub" target="_blank" rel="noreferrer">
        <button className="me-btn">
          <FaTwitter size={18} />
        </button>
      </a>
      <a href="https://discord.gg/MMaMxRjUpj" target="_blank" rel="noreferrer">
        <button id="nav-login-btn" className="login-btn btn btn-primary">
          <span> JOIN US </span>
        </button>
      </a>
    </div>
  )
}

export default LoginBtn