import { useState } from 'react'
import '../styles/EducationalExperience.css'

let nextID = 1;

export default function EducationalExperience () {
  const initialItems = [
    {id: 0,
    schoolName: 'ABHS',
    titleOfStudy: 'High School',
    dateOfStudy: '2007'}
  ]

  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');

  function handleNameChange(e) {
    setSchoolName(e.target.value);
  }
  function handleTitleChange(e) {
    setTitleOfStudy(e.target.value);
  }
  function handleDateChange(e) {
    setDateOfStudy(e.target.value);
  }

  const [items, setItems] = useState(initialItems)

  function handleAddItem(e) {
    setSchoolName('');
    setTitleOfStudy('');
    setDateOfStudy('');
    // setItems([
    //   ...items,
    //   {
    //     id: nextID++,
    //     schoolName: schoolName,
    //     titleOfStudy: titleOfStudy,
    //     dateOfStudy: titleOfStudy
    //   }
    // ])
    // Copy items to new array for sorting
    const newItems = [
      ...items,
      {
        id: nextID++,
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        dateOfStudy: dateOfStudy // fixed typo from titleOfStudy
      }
    ];
    // Sort by dateOfStudy (convert to appropriate type if needed)
    const sorted = [...newItems].sort((a, b) => a.dateOfStudy - b.dateOfStudy);
    setItems(sorted);
  }

  function sortItems() {
    const sortItems = () => {
      const sorted = [...items].sort((a,b) => a-b);
      setItems(sorted);
    }
  }

  function handleDeleteItem(itemId) {
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="School Name"
          value={schoolName}
          onChange={handleNameChange}
        />
        <input
          placeholder="Title of Study"
          value={titleOfStudy}
          onChange={handleTitleChange}
        />
        <input
          placeholder="Date of Study"
          value={dateOfStudy}
          onChange={handleDateChange}
        />
        <button onClick={handleAddItem}>Add Educational Experience</button>
      </form>
      
      <div className="printDetails">
        <h1>Educational Experience</h1>

        <div className="printDetails">
        </div>
          <ul>
          {items.map((item) => (
            /* 1. KEY: We use item.id instead of index (Best Practice) 
               2. RENDERING: We access specific properties (item.schoolName), 
                  we cannot render the whole 'item' object at once.
            */
            <li key={item.id}>
              <h3>{item.schoolName}</h3>
              <p>Study: {item.titleOfStudy}</p>
              <p>Date: {item.dateOfStudy}</p>
              <button onClick={() => handleDeleteItem(item.id)}>Delete {item.id}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}