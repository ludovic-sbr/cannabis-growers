import React from 'react'
import Logo from '../header/Logo'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'

const Index = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container">
        <div className="row footer-top">
          <div className="scgc-logo col-4">
            <Logo />
          </div>
          <div className="scgc-menu col-6">
            <h4> MENU </h4>
            <ul>
              <li> <HashLink className="footer-link" to="#about"> About </HashLink> </li>
              <li> <HashLink className="footer-link" to="#roadmap"> Roadmap </HashLink> </li>
              <li> <HashLink className="footer-link" to="#specs"> Specs </HashLink> </li>
              <li> <HashLink className="footer-link" to="#team"> Team </HashLink> </li>
            </ul>
          </div>
          <div className="scgc-medias col-2">
            <a href="https://discord.gg/MMaMxRjUpj" target="_blank" rel="noreferrer">
              <button className="footer-btn">
                <FaDiscord size={20} />
              </button>
            </a>
            <a href="https://twitter.com/SolCGrowersClub" target="_blank" rel="noreferrer">
              <button className="footer-btn">
                <FaTwitter size={20} />
              </button>
            </a>
          </div>
        </div>
        <div className="row footer-copyright">
          <p> © 2022 Cannabis Growers Club. All rights reserved. </p>
        </div>
      </div>
    </footer>
  )
}

export default Index