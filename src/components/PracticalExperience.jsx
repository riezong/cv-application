import { useState } from 'react'
import '../styles/PracticalExperience.css'

export default function PracticalExperience () {
  
  return (
    <div>
      <div className="printDetails">
        <h1>Practical Experience</h1>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="companyName">Company Name</label>
          <input
            id='companyName'
            placeholder="Company Name"
          />
          <label htmlFor="Position Title">Position Title</label>
          <input
            id='Position Title'
            placeholder="Position Title"
          />
          <label htmlFor="startDate">Start Date</label>
          <input
            id='startDate'
            placeholder="Start Date"
          />
          <label htmlFor="companyName">End Date</label>
          <input
            id='endDate'
            placeholder="End Date"
          />
          <label htmlFor="location">Location</label>
          <input
            id='location'
            placeholder="Location"
          />
          <label htmlFor="description">Description</label>
          <input
            id='description'
            placeholder="Description"
          />
        <div className="formButtons">
          <button>Delete</button>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </form>
      </div>
    </div>
  )
}