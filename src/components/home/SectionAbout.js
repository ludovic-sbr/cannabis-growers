import React from 'react'

import SCGC from '../../assets/images/about/scgc.jpg'
import investor from "../../assets/images/about/investor.jpg"
import opportunities from "../../assets/images/about/opportunities.jpg"
import owner from "../../assets/images/about/owner.jpg"

const SectionAbout = () => {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <h2> ABOUT </h2>
        <div className="row para mx-auto">
          <div className="img col-xl-4 d-none d-xl-flex">
            <img src={SCGC} alt="SCGC" />
          </div>
          <div className="content col-xl-8">
            <h3> SOLANA CANNABIS GROWERS CLUB </h3>
            <p>
              The <b>Solana Cannabis Growers Club</b> is a Collection of <b>4200
              Cannabis
              Pots NFTs with 100+ hand drawn traits</b>.
              <br/>
              Each NFT is unique and comes with a membership to an exclusive
              Club & Investment Plan in our Company.
              <br/><br/>
              <b>Come share your passion</b> for the <b>Cannabis</b> with our
              private club
              with endless <b>benefits</b> and <b>utilities</b> where the
              Community will make
              all decision.
            </p>
          </div>
        </div>
        <div className="row para para-left mx-auto">
          <div className="content col-xl-8">
            <h3> BECOME A CANNABIS INVESTOR </h3>
            <p>
              We want to anyone who always dreamed about having the opportunity
              <b> to be an investor</b> or an actor of the Cannabis
              industry be able to invest with
              <b> low Invesment</b> and <b>high rewards</b>.
              <br/><br/>
              Our goal is to create a <b>Company who will grow Cannabis
              Plants </b>
              and export the harvest worldwide to <b>generate benefits</b> for
              our <b>NFTs
              Holder</b>.
              <br/><br/>
              We want to weld the Cannabis Community with NFT Community to all
              being able to <b>generate benefits while sharing our love for
              Maryjane</b>.
            </p>
          </div>
          <div className="img col-xl-4 d-none d-xl-flex justify-content-xl-end">
            <img src={investor} alt="investor" />
          </div>
        </div>
        <div className="row para mx-auto">
          <div className="img col-xl-4 d-none d-xl-flex">
            <img src={opportunities} alt="opportunities"/>
          </div>
          <div className="content col-xl-8">
            <h3> CANNABIS MAKES OPPORTUNITIES </h3>
            <p>
              The <b>Cannabis</b> is a wonderful plants with many different uses
              but
              unfortunatly this Market is mainly handled by Big
              Groups.
              <br/><br/>
              We want to give the opportunity to OG Growers to be able to <b>be
              an
              actor of this Market</b> and also live this adventure with us. We
              will
              choose OG's to come with us create the Company in Uruguay if they
              always dreamed about a life change.
            </p>
          </div>
        </div>
        <div className="row para para-left mx-auto">
          <div className="content col-xl-8">
            <h3> BECOME A PLANTS OWNER </h3>
            <p>
              SCGC Holders will have the possibility to be part of our
              <b> Investment Plan</b>. In additions to <b>the
              benefits</b> they will receive from the Basic
              Staking System and the benefits generate by the Company, Holders
              will have the possibility to become <b>Plants Owners</b>.
              <br/><br/>
              <b>They will be able to see they plants growing in livestream
                24H/24h </b>
              until the harvest and after that they will be able to sell there
              harvest to <b>generate benefits</b> or getting there harvest
              shipped to
              them (depend on the country laws).
              <br/><br/>
              <b>The Community will make all decision</b> in the Company and we
              will
              keep sharing everything with our Community <b>to make them
              involved
              in the Company</b>.
            </p>
          </div>
          <div className="img d-none d-xl-flex col-xl-4 justify-content-xl-end">
            <img src={owner} alt="owner" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout