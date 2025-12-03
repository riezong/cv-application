import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/generalInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'

function App() {

  return (
    <>
      <div className="container">
        <div className="general-information">
          <div className="display">
            <h1>Hi, I'm Andrew Wong!</h1>
            <div className="contact-details">
              <p>hi@andrew-wong.net</p>
              <p>+614 0000 0000</p>
            </div>
          </div>
          <div className="edit">
            <button>Edit</button>
            <div className="form">
              <form onSubmit={e => e.preventDefault()}>
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" placeholder='Name' id='name'></input>
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="text" placeholder='Email' id='email'></input>
                </div>
                <div className="field">
                  <label htmlFor="tel">Phone Number</label>
                  <input type="text" placeholder='Phone Number' id='tel'></input>
                </div>
                <div className="buttons">
                    <button className="btn-save">Save</button>
                    <button className="btn-cancel">Cancel</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <h1>Education Experience</h1>
        <ul className="experience-list">
          <li className="card">
            <div className="display">
              <div className="date">
                <p>2015 - 2019</p>
              </div>
              <div className="details">
                <p>University of Technology Sydney</p>
                <p>b. Design in Visual Communications and b. Arts in International Studies</p>
                <div className="buttons">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </div>
            </div>
            <div className="form">
              <form onSubmit={e => e.preventDefault()}>
                 <div className="field">
                   <label htmlFor="education-name">School</label>
                   <input type="text" placeholder='School' id='education-name'></input>
                 </div>
                 <div className="field">
                   <label htmlFor="education-title">Degree</label>
                   <input type="text" placeholder='Degree' id='education-title'></input>
                 </div>
                 <div className="field">
                   <label htmlFor="education-start">Start Date</label>
                   <input type="text" placeholder='Start Date' id='education-start'></input>
                 </div>
                 <div className="field">
                   <label htmlFor="education-end">End Date</label>
                   <input type="text" placeholder='End Date' id='education-end'></input>
                 </div>
                 <div className="buttons">
                  <button className="btn-save">Save</button>
                  <button className="btn-cancel">Cancel</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </form>
            </div>
          </li>
          {/* <li className="card">
            <div className="date">
              <p>2020</p>
            </div>
            <div className="details">
              <p>University of Technology Sydney</p>
              <p>Hon. Design in Visual Communication</p>
              <div className="buttons">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          </li> */}
        </ul>
        <div>
          <button className='add'>+ Add Education Experience</button>
        </div>
        <h1>Practical Experience</h1>
        <ul className="work-experience-list">
          <li className="card">
            <div className="display">
              <div className="date">
                <p>2023 - Present</p>
              </div>
              <div className="details">
                <p>Seven West Media</p>
                <p>Broadcast Designer</p>
                <div className="buttons">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </div>
            </div>
            <div className="form">
              <form onSubmit={e => e.preventDefault()}>
                 <div className="field">
                   <label htmlFor="work-name">Company Name</label>
                   <input type="text" placeholder='Company Name' id='work-name'></input>
                 </div>
                 <div className="field">
                   <label htmlFor="work-title">Position Title</label>
                   <input type="text" placeholder='Position Title' id='work-title'></input>
                 </div>
                 <div className="field">
                   <label htmlFor="work-start">Start Date</label>
                   <input type="text" placeholder='Start Date' id='work-start'></input>
                 </div>
                 <div className="field">
                   <label htmlFor="work-end">End Date</label>
                   <input type="text" placeholder='End Date' id='work-end'></input>
                 </div>
                 <div className="field">
                   <label htmlFor="work-desc">Description</label>
                   <input type="text" placeholder='Description' id='work-desc'></input>
                 </div>
                 <div className="buttons">
                  <button className="btn-save">Save</button>
                  <button className="btn-cancel">Cancel</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </form>
            </div>
          </li>
          {/* <li className="card">
            <div className="date">
              <p>2022 - 2023</p>
            </div>
            <div className="details">
              <p>Aidacare</p>
              <p>Graphic Designer</p>
              <div className="buttons">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          </li> */}
        </ul>
        <div>
          <button className='add'>+ Add Practical Experience</button>
        </div>
      </div>
    </>
  )
}

export default App
