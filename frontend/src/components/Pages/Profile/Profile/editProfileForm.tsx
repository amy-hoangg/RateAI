import React, { useState } from "react";
import usersService from "../../../../service/usersService"; // Make sure to import your usersService module

interface EditNameFormProps {
  onSubmit: (firstName: string, lastName: string) => void;
}

const EditNameForm: React.FC<EditNameFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const editedName = await usersService.editName(firstName, lastName); // Assuming your usersService has an editFirstName function
      console.log('New name:', editedName);
      onSubmit(firstName, lastName);
    } 
    catch (error) {
      console.error('Error editing name:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditNameForm;
