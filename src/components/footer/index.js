import React from 'react'
import Logo from '../header/Logo'
import { HashLink } from 'react-router-hash-link'

import meLogo from "../../assets/images/magiceden_logo.png"
import twitterLogo from '../../assets/images/twitter_logo.png'
import discordLogo from '../../assets/images/discord_logo.png'

const Index = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container">
        <div className="row footer-top">
          <div className="scgc-logo col-md-4">
            <Logo />
          </div>
          <div className="scgc-menu d-none col-md-6 d-md-block">
            <h4> MENU </h4>
            <ul>
              <li> <HashLink className="footer-link" to="#about"> About </HashLink> </li>
              <li> <HashLink className="footer-link" to="#roadmap"> Roadmap </HashLink> </li>
              <li> <HashLink className="footer-link" to="#specs"> Specs </HashLink> </li>
              <li> <HashLink className="footer-link" to="#team"> Team </HashLink> </li>
            </ul>
          </div>
          <div className="scgc-medias col-md-2">
            <a href="https://magiceden.io/" target="_blank" rel="noreferrer">
              <button className="footer-btn">
                <img src={meLogo} alt="meLogo" style={{height: '16px'}} />
              </button>
            </a>
            <a href="https://discord.gg/MMaMxRjUpj" target="_blank" rel="noreferrer">
              <button className="footer-btn">
                <img src={discordLogo} alt="meLogo" style={{height: '20px'}} />
              </button>
            </a>
            <a href="https://twitter.com/SolCGrowersClub" target="_blank" rel="noreferrer">
              <button className="footer-btn">
                <img src={twitterLogo} alt="meLogo" style={{height: '16px'}} />
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