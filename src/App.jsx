import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/generalInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'

function App() {

  return (
    <>
      <div className="container">
        <GeneralInformation/>
        <h1>Education Experience</h1>
        <EducationalExperience/>
        <h1>Practical Experience</h1>
        <PracticalExperience/>
      </div>
    </>
  )
}

export default App
