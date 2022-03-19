import React from 'react'
import Johnson from '../../assets/images/team/johnson.jpg'
import Sicario from '../../assets/images/team/sicario.jpg'
import Keith from '../../assets/images/team/keith.jpg'
import Christine from '../../assets/images/team/christine.jpg'

const SectionTeam = () => {
  return (
    <section id="team" className="section-team container">
      <h2 className="section-title"> CANNABIS GROWERS TEAM </h2>
      <div className="row team-text mx-auto">
        <p>
          Our goal is to share all the Benefits of the Cannabis with a
          passionate Community.
          We want to create passive Life Income for our Holders with a bridge
          between web3 assets and real life assets.
        </p>
      </div>
      <div className="row cards">
        <div
          className="col-xl-3 col-md-6 col-12 mx-auto mb-5 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img">
              <img src={Johnson}/>
            </div>
            <div className="card-member-content">
              <span className="member-name"> JOHNSON </span>
              <span className="member-role"> Founder of SCGC </span>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-md-6 col-12 mx-auto mb-5 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img">
              <img src={Sicario}/>
            </div>
            <div className="card-member-content">
              <span className="member-name"> SICARIO </span>
              <span className="member-role"> Co-Founder of SCGC </span>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-md-6 col-12 mx-auto mb-5 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img">
              <img src={Keith}/>
            </div>
            <div className="card-member-content">
              <span className="member-name"> KEITH </span>
              <span className="member-role"> Co-Founder of SCGC </span>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-md-6 col-12 mx-auto mb-5 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img">
              <img src={Christine}/>
            </div>
            <div className="card-member-content">
              <span className="member-name"> CHRISTINE </span>
              <span className="member-role"> Community manager </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row join-us">
        <p> Start a new life </p>
        <h2 className="section-title"> JOIN US ON DISCORD </h2>
        <a href="https://discord.gg/MMaMxRjUpj" target="_blank"
           rel="noreferrer">
          <button className="login-btn btn btn-primary mx-auto">
            <span> GO ! </span>
          </button>
        </a>
      </div>
    </section>
  )
}

export default SectionTeam