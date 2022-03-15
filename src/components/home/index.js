import React from 'react'

import SectionWelcome from './SectionWelcome'
import SectionAbout from './SectionAbout'
import SectionRoadmap from './SectionRoadmap'
import SectionSpecs from './SectionSpecs'
import SectionTeam from './SectionTeam'

const Index = () => {
  return (
    <div className="home container-fluid">
      <SectionWelcome />
      <SectionAbout />
      <SectionRoadmap />
      <SectionSpecs />
      <SectionTeam />
    </div>
  )
}

export default Index