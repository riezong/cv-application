import { useState } from 'react'
import '../styles/GeneralInformation.css'

export default function GeneralInformation () {
  // Draft State (Tracks what is being typed)
  const [name, setName] = useState('Andrew');
  const [email, setEmail] = useState('hi@andrew-wong.net');
  const [tel, setTel] = useState('0400 000 000');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleTelChange(e) {
    setTel(e.target.value);
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
      </form>

      <div className="printDetails">

        
          <div className="printDetails">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{tel}</p>
          </div>
        
      </div>
    </div>
  )
}