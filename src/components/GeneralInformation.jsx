import { useState } from 'react'
import '../styles/GeneralInformation.css'

export default function GeneralInformation () {
  // "Source of truth" for the displayed information.
  const [profile, setProfile] = useState({
    name: 'Andrew Wong',
    email: 'hi@andrew-wong.net',
    tel: '+614 0000 0000',
  });

  // A separate state to hold form data while in edit mode.
  const [formData, setFormData] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);

  // When editing begins, populate the form with the current profile data.
  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  // On save, update the main profile state and exit edit mode.
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  // On cancel, discard any changes by simply exiting edit mode.
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // Update the temporary form state as the user types.
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const formClasses = `form ${isEditing ? '' : 'hidden'}`;

  return (
    <>
      <div className="general-information">
        <div className="display">
          <h1>Hi, I'm {profile.name}!</h1>
          <div className="contact-details">
            <p>{profile.email}</p>
            <p>{profile.tel}</p>
          </div>
        </div>
        <div className="edit">
          <button onClick={handleEdit}>Edit</button>
          <div className={formClasses}>
            <form onSubmit={handleFormSubmit}>
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder='Name' id='name' value={formData.name} onChange={handleInputChange}></input>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' id='email' value={formData.email} onChange={handleInputChange}></input>
              </div>
              <div className="field">
                <label htmlFor="tel">Phone Number</label>
                <input type="tel" placeholder='Phone Number' id='tel' value={formData.tel} onChange={handleInputChange}></input>
              </div>
              <div className="buttons">
                  <button type="submit" className="btn-save">Save</button>
                  <button type="button" className="btn-cancel" onClick={handleCancelEdit}>Cancel</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}