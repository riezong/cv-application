import { useState } from 'react'
import '../styles/PracticalExperience.css'

const ExperienceForm = ({ initialData, onSave, onCancel, onDelete }) => {
  // A separate state to hold form data while in edit mode.
  const [formData, setFormData] = useState(initialData);

  // Update the temporary form state as the user types.
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.split('-')[1]; // e.g., 'practical-name' -> 'name'
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
          <label htmlFor="practical-name">Company Name</label>
          <input type="text" id="practical-name" value={formData.name} onChange={handleInputChange} placeholder="Company Name" />
        </div>
        <div className="field">
          <label htmlFor="practical-position">Position Title</label>
          <input type="text" id="practical-position" value={formData.position} onChange={handleInputChange} placeholder="Position Title" />
        </div>
        <div className="field">
          <label htmlFor="practical-start">Start Date</label>
          <input type="text" id="practical-start" value={formData.start} onChange={handleInputChange} placeholder="Start Date" />
        </div>
        <div className="field">
          <label htmlFor="practical-end">End Date</label>
          <input type="text" id="practical-end" value={formData.end} onChange={handleInputChange} placeholder="End Date" />
        </div>
        <div className="field">
          <label htmlFor="practical-description">Description</label>
          <textarea id="practical-description" value={formData.description} onChange={handleInputChange} placeholder="Description" rows="4"></textarea>
        </div>
        <div className="buttons">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" className="btn-cancel" onClick={() => onCancel(initialData)}>Cancel</button>
          <button type="button" className="btn-delete" onClick={() => onDelete(initialData.id)}>Delete</button>
        </div>
      </form>
    </div>
  )
};

const ExperienceItem = ({ item, isEditing, onSetEditingId, handlers }) => {
  if (isEditing) {
    return (
      <li className="card">
        <ExperienceForm initialData={item} {...handlers} />
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
          <p><strong>{item.name}</strong></p>
          <p>{item.position}</p>
          <p className="description">{item.description}</p>
          <div className="buttons">
            <button className="btn-edit" onClick={() => onSetEditingId(item.id)}>Edit</button>
            <button className="btn-delete" onClick={() => handlers.onDelete(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function PracticalExperience () {
  const initialExperienceItems = [
    {
      id: crypto.randomUUID(),
      name: 'Seven West Media',
      position: 'Broadcast Designer',
      start: '2023',
      end: 'Present',
      description: 'Lorem Ipsum',
    },
  ]

  const [experienceList, setExperienceList] = useState(initialExperienceItems);
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
      position: '',
      start: '',
      end: '',
      description: '',
      isNew: true, // A flag to identify new, unsaved items.
    };
    setExperienceList(getSortedList([
      ...experienceList,
      newItem
    ]));
    // Immediately set the new item to be in edit mode by its new ID.
    setEditingItemId(newItem.id);
  };

  const handleDeleteItem = (itemIdToDelete) => {
    setExperienceList(getSortedList(
      experienceList.filter(item => item.id !== itemIdToDelete)
    ));
  };

  const handleSaveItem = (savedItem) => {
    // If the item is new and has no school name, treat it as an abandoned entry and delete it.
    if (savedItem.isNew && !savedItem.name.trim()) {
      handleDeleteItem(savedItem.id);
    } else {
      const updatedList = experienceList.map(item => {
        if (item.id === savedItem.id) {
          // Remove the 'isNew' flag upon a successful save.
          const { isNew, ...rest } = savedItem;
          return rest;
        }
        return item;
      });
      setExperienceList(getSortedList(updatedList));
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
        {experienceList.map((item) => (
          <ExperienceItem
            key={item.id}
            item={item}
            isEditing={editingItemId === item.id}
            onSetEditingId={setEditingItemId}
            handlers={{ onSave: handleSaveItem, onCancel: handleCancelEdit, onDelete: handleDeleteItem }}
          />
        ))}
      </ul>
      <div>
        <button className='add' onClick={handleAddItem}>+ Add Practical Experience</button>
      </div>
    </>
  )
}