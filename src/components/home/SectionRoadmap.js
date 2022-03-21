import React from 'react'

import One from '../../assets/images/numbers/1.webp'
import Two from '../../assets/images/numbers/2.webp'
import Three from '../../assets/images/numbers/3.webp'
import Four from '../../assets/images/numbers/4.webp'
import Five from '../../assets/images/numbers/5.webp'
import Six from '../../assets/images/numbers/6.webp'
import Seven from '../../assets/images/numbers/7.webp'

import Roadmap1 from '../../assets/images/roadmap/roadmap1.png'
import Roadmap2 from '../../assets/images/roadmap/roadmap2.png'
import Roadmap3 from '../../assets/images/roadmap/roadmap3.png'
import Roadmap4 from '../../assets/images/roadmap/roadmap4.png'
import Roadmap5 from '../../assets/images/roadmap/roadmap5.png'
import Roadmap6 from '../../assets/images/roadmap/roadmap6.png'
import Roadmap7 from '../../assets/images/roadmap/roadmap7.png'

const SectionRoadmap = () => {
  return (
    <section id="roadmap" className="section-roadmap container">
      <h2 className="section-title"> ROADMAP </h2>
      <div className="row caroussel mx-auto">
        <div className="caroussel-item">
          <img src={Roadmap1} alt="item-img-1"/>
          <div className="caroussel-item-content">
            <img className="item-number" src={One} alt="one"/>
            <h3> APRIL </h3>
            <p>
              We will flight right after the mint to Uruguay to Join our Contact
              who will help us in the creation of the Company and the Culture.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap2} alt="item-img-2"/>
          <div className="caroussel-item-content">
            <img className="item-number" src={Two} alt="two"/>
            <h3> MAY </h3>
            <p>
              We will set up the farm to be ready to plant Cannabis. This
              includes ordering materials. (Soil,nutriments etc... )
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap3} alt="item-img-3"/>
          <div className="caroussel-item-content">
            <img className="item-number" src={Three} alt="three"/>
            <h3> JUNE </h3>
            <p>
              We will start to plant our Cannabis plants and we will take care
              of them everyday !
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap4} alt="item-img-4"/>
          <div className="caroussel-item-content">
            <img className="item-number" src={Four} alt="four"/>
            <h3> JULY </h3>
            <p>
              Plants are starting to have a nice size. They are growing.
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap5} alt="item-img-5"/>
          <div className="caroussel-item-content">
            <img className="item-number" src={Five} alt="Five"/>
            <h3> AUGUST </h3>
            <p>
              The Flowers are coming we are getting closer to the Harvest !
            </p>
          </div>
        </div>
        <div className="caroussel-item">
          <img src={Roadmap6} alt="item-img-6"/>
          <div className="caroussel-item-content">
            <img className="item-number" src={Six} alt="Six"/>
            <h3> SEPTEMBER </h3>
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
            <img className="item-number" src={Seven} alt="Seven"/>
            <h3> OCTOBER </h3>
            <p>
              We will start to sell the Harvest and after that we will able to
              let you know how much the Community will perceive from the
              Benefits of the Company !
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionRoadmap