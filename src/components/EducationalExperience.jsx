import { useState } from 'react'
import '../styles/EducationalExperience.css'

const EducationForm = ({ initialData, onSave, onCancel, onDelete }) => {
  // A separate state to hold form data while in edit mode.
  const [formData, setFormData] = useState(initialData);

  // Update the temporary form state as the user types.
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.split('-')[1]; // e.g., 'education-name' -> 'name'
    setFormData(prevFormData => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="form">
      <form onSubmit={handleSave}>
        <div className="field">
          <label htmlFor="education-name">School</label>
          <input type="text" placeholder='School' id='education-name' value={formData.name} onChange={handleInputChange}></input>
        </div>
        <div className="field">
          <label htmlFor="education-degree">Degree</label>
          <input type="text" placeholder='Degree' id='education-degree' value={formData.degree} onChange={handleInputChange}></input>
        </div>
        <div className="field">
          <label htmlFor="education-start">Start Date</label>
          <input type="text" placeholder='Start Date' id='education-start' value={formData.start} onChange={handleInputChange}></input>
        </div>
        <div className="field">
          <label htmlFor="education-end">End Date</label>
          <input type="text" placeholder='End Date' id='education-end' value={formData.end} onChange={handleInputChange}></input>
        </div>
        <div className="buttons">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" className="btn-cancel" onClick={() => onCancel(initialData)}>Cancel</button>
          <button type="button" className="btn-delete" onClick={() => onDelete(initialData.id)}>Delete</button>
        </div>
      </form>
    </div>
  );
};

const EducationItem = ({ item, isEditing, onSetEditingId, handlers }) => {
  if (isEditing) {
    return (
      <li className="card">
        <EducationForm initialData={item} {...handlers} />
      </li>
    );
  }

  return (
    <li className="card">
      <div className="display">
        <div className="date">
          <p>{item.start} - {item.end}</p>
        </div>
        <div className="details">
          <p>{item.name}</p>
          <p>{item.degree}</p>
          <div className="buttons">
            <button className="btn-edit" onClick={() => onSetEditingId(item.id)}>Edit</button>
            <button className="btn-delete" onClick={() => handlers.onDelete(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function EducationalExperience () {
  const initialEducationItems = [
    {
      id: crypto.randomUUID(),
      name: 'University of Technology Sydney',
      degree: 'b. Design in Visual Communications and b. Arts in International Studies',
      start: '2015',
      end: '2019'
    }, 
    {
      id: crypto.randomUUID(),
      name: 'University of Technology Sydney',
      degree: 'Hon. Design in Visual Communication',
      start: '2020',
      end: '2020'
    },
  ]

  const [educationList, setEducationList] = useState(initialEducationItems);
  // This state tracks which item is currently being edited. null means no item is being edited.
  const [editingItemId, setEditingItemId] = useState(null);

  // Sorts the list by start year in descending order (most recent first).
  const getSortedList = (list) => {
    const listToSort = [...list];
    // Using localeCompare is safer for string-based years.
    // It handles empty strings gracefully, placing them at the end.
    listToSort.sort((a, b) => {
      if (!b.start) return -1;
      if (!a.start) return 1;
      return b.start.localeCompare(a.start);
    });
    return listToSort;
  };

  const handleAddItem = () => {
    const newItem = {
      id: crypto.randomUUID(),
      name: '',
      degree: '',
      start: '',
      end: '',
      isNew: true, // A flag to identify new, unsaved items.
    };
    setEducationList(getSortedList([
      ...educationList,
      newItem
    ]));
    // Immediately set the new item to be in edit mode by its new ID.
    setEditingItemId(newItem.id);
  };

  const handleDeleteItem = (itemIdToDelete) => {
    setEducationList(getSortedList(
      educationList.filter(item => item.id !== itemIdToDelete)
    ));
  };

  const handleSaveItem = (savedItem) => {
    // If the item is new and has no school name, treat it as an abandoned entry and delete it.
    if (savedItem.isNew && !savedItem.name.trim()) {
      handleDeleteItem(savedItem.id);
    } else {
      const updatedList = educationList.map(item => {
        if (item.id === savedItem.id) {
          // Remove the 'isNew' flag upon a successful save.
          const { isNew, ...rest } = savedItem;
          return rest;
        }
        return item;
      });
      setEducationList(getSortedList(updatedList));
    }
    // Exit edit mode.
    setEditingItemId(null);
  };

  const handleCancelEdit = (item) => {
    // If the user cancels a new, empty item, remove it from the list.
    if (item.isNew) {
      handleDeleteItem(item.id);
    }
    // Exit edit mode.
    setEditingItemId(null);
  };

  return (
    <>
      <ul className="experience-list">
        {educationList.map((item) => (
          <EducationItem
            key={item.id}
            item={item}
            isEditing={editingItemId === item.id}
            onSetEditingId={setEditingItemId}
            handlers={{ onSave: handleSaveItem, onCancel: handleCancelEdit, onDelete: handleDeleteItem }}
          />
        ))}
      </ul>
      <div>
        <button className='add' onClick={handleAddItem}>+ Add Education Experience</button>
      </div>
    </>
  )
}