import React, { useEffect, useRef, useState } from 'react'

import Roadmap1 from '../../assets/images/roadmap/roadmap1.png'
import Roadmap2 from '../../assets/images/roadmap/roadmap2.png'
import Roadmap3 from '../../assets/images/roadmap/roadmap3.png'
import Roadmap4 from '../../assets/images/roadmap/roadmap4.png'
import Roadmap5 from '../../assets/images/roadmap/roadmap5.png'
import Roadmap6 from '../../assets/images/roadmap/roadmap6.png'
import Roadmap7 from '../../assets/images/roadmap/roadmap7.png'

import Whitepaper from "../../assets/files/whitepaper_scgc.pdf"

const SectionRoadmap = () => {
  const pdfRef = useRef()
  const [pdfStatus, setPdfStatus] = useState(false)

  useEffect(() => {
    pdfRef.current.onclick = () => {
      setPdfStatus(false)
    }
  })

  return (
    <section id="roadmap" className="section-roadmap container">
      <h2 className="section-title"> ROADMAP </h2>
      <div className="row caroussel mx-auto">
        <div className="caroussel-item">
          <img src={Roadmap1} alt="item-img-1"/>
          <div className="caroussel-item-content">
            <span> APRIL </span>
            <h3> CREATING THE COMPANY </h3>
            <p>
              We will flight right after the mint to Uruguay to Join our Contact
              who will help us in the creation of the Company and the Culture.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap2} alt="item-img-2"/>
          <div className="caroussel-item-content">
            <span> MAY </span>
            <h3> SETTING UP THE FARM </h3>
            <p>
              We will set up the farm to be ready to plant Cannabis. This
              includes ordering materials. (Soil,nutriments etc... )
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap3} alt="item-img-3"/>
          <div className="caroussel-item-content">
            <span> JUNE </span>
            <h3> STARTING THE CANNABIS PLANTATION </h3>
            <p>
              We will start to plant our Cannabis plants and we will take care
              of them everyday !
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap4} alt="item-img-4"/>
          <div className="caroussel-item-content">
            <span> JULY </span>
            <h3> PLANTS ARE GROWING... </h3>
            <p>
              Plants are starting to have a nice size. They are growing.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap5} alt="item-img-5"/>
          <div className="caroussel-item-content">
            <span> AUGUST </span>
            <h3> GETTING CLOSER TO THE HARVEST </h3>
            <p>
              The Flowers are coming we are getting closer to the Harvest !
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap6} alt="item-img-6"/>
          <div className="caroussel-item-content">
            <span> SEPTEMBER </span>
            <h3> STARTING THE HARVEST </h3>
            <p>
              We will start the harvest of the culture and we will choose some
              of our Holders to join us for the month of the Harvest ! We will
              reward them of course !
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap7} alt="item-img-7"/>
          <div className="caroussel-item-content">
            <span> OCTOBER </span>
            <h3> ARRIVAL OF BENEFITS </h3>
            <p>
              We will start to sell the Harvest and after that we will able to
              let you know how much the Community will perceive from the
              Benefits of the Company !
            </p>
          </div>
        </div>
      </div>
      <button className="login-btn btn btn-primary mx-auto mt-4" onClick={() => setPdfStatus(!pdfStatus)}>
        <span> WHITEPAPER </span>
      </button>
      <div className="document" ref={pdfRef} style={pdfStatus ? {display: "flex"} : {display: "none"}}>
        <iframe src={Whitepaper} title="pdf" />
        <a href={Whitepaper} download="Whitepaper_CannabisGrowersClub">
          <button className="login-btn btn btn-primary mx-auto mt-2">
            <span> TELECHARGER </span>
          </button>
        </a>
        <p> Cliquez à l'exterieur du document pour quitter. </p>
      </div>
    </section>
  )
}

export default SectionRoadmap