import React from 'react'
import Monkey from "../../assets/images/monkey.jpg"

import One from "../../assets/images/numbers/1.webp"
import Two from "../../assets/images/numbers/2.webp"
import Three from "../../assets/images/numbers/3.webp"
import Four from "../../assets/images/numbers/4.webp"
import Five from "../../assets/images/numbers/5.webp"
import Six from "../../assets/images/numbers/6.webp"
import Seven from "../../assets/images/numbers/7.webp"
import Eight from "../../assets/images/numbers/8.webp"
import Nine from "../../assets/images/numbers/9.webp"

const SectionRoadmap = () => {
  return (
    <section id="roadmap" className="section-roadmap container">
      <h2 className="section-title"> ROADMAP </h2>
      <div className="row caroussel mx-auto">
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={One} alt="one" />
            <h3> CREATING STRONG OG COMMUNITY </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Two} alt="two" />
            <h3> WHITELIST ANNOUNCEMENT </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Three} alt="three" />
            <h3> WEEKLY VOCAL RECORDS </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Four} alt="four" />
            <h3> MINT DATE ANNOUNCEMENT </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Five} alt="Five" />
            <h3> PRESALE FOR WHITELISTED </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Six} alt="Six" />
            <h3> PUBLIC SALES </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Seven} alt="Seven" />
            <h3> INFO ABOUT STACKING </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Eight} alt="eight" />
            <h3> EXCLUSIVE HOLDERS PROGRAM </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Monkey} alt="item-image" />
          <div className="caroussel-item-content">
            <img className="item-number" src={Nine} alt="nine" />
            <h3 className=""> CANNABIS GROWERS COMPANY </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionRoadmap