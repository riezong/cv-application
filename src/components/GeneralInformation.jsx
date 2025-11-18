import { useState } from 'react'
import '../styles/GeneralInformation.css'

export default function GeneralInformation () {
  // Draft State (Tracks what is being typed)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  // Submitted State (Tracks what to display below)
  const [submittedData, setSubmittedData] = useState(null);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleTelChange(e) {
    setTel(e.target.value);
  }

  function handleReset(e) {
    setName('');
    setEmail('');
    setTel('');
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedData({
      name: name,
      email: email,
      tel: tel,
    });

    handleReset();
  }

  return (
    <div>

      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Phone Number"
          value={tel}
          onChange={handleTelChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <div className="printDetails">
        <h1>General Information</h1>

        {/* Only render this section if submittedData is not null */}
        {submittedData && (
          <div className="printDetails">
            {/* Note: We read from submittedData, NOT the raw 'name' state */}
            <h2>Name: {submittedData.name}</h2>
            <h2>Email: {submittedData.email}</h2>
            <h2>Tel: {submittedData.tel}</h2>
          </div>
        )}
      </div>
    </div>
  )
  
  
}