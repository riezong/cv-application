import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/generalInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'

function App() {

  return (
    <>
      <div id="general-information">
        <GeneralInformation />
      </div>
      
      <div id="educational-experience">
        <EducationalExperience />
      </div>
      
      <div id="practical-experience">
        <PracticalExperience />
      </div>
    </>
  )
}

export default App
