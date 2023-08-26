import React, { useState } from "react";

const EditNameForm = ({ onSubmit }) => {
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Name:
        <input type="text" value={newName} onChange={handleNameChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditNameForm;
