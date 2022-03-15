import React from 'react'

const SectionTeam = () => {
  return (
    <section id="team" className="section-team container">
      <h2 className="section-title"> CANNABIS GROWERS TEAM </h2>
      <div className="row team-text mx-auto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
      <div className="row cards">
        <div className="col-3 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img" />
            <div className="card-member-content">
              <span className="member-name"> JOHNSON </span>
              <span className="member-role"> Founder of SCGC </span>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img" />
            <div className="card-member-content">
              <span className="member-name"> SICARIO </span>
              <span className="member-role"> Co-Founder of SCGC </span>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img" />
            <div className="card-member-content">
              <span className="member-name"> KEITH </span>
              <span className="member-role"> Co-Founder of SCGC </span>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center">
          <div className="card-member">
            <div className="card-member-img" />
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
        <button className="login-btn btn btn-primary mx-auto">
          <span> GO ! </span>
        </button>
      </div>
    </section>
  )
}

export default SectionTeam