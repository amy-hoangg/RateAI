import React, { useState } from "react";
import usersService from "../../../../service/usersService"; // Make sure to import your usersService module

interface EditEmailFormProps {
  onSubmit: (newEmail: string) => void;
}

const EditEmailForm: React.FC<EditEmailFormProps> = ({ onSubmit }) => {
  const [newEmail, setNewEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const editedEmail = await usersService.editEmail(newEmail); // Assuming your usersService has an editEmail function
      console.log('newEmail created:', editedEmail);
      onSubmit(newEmail);
    } catch (error) {
      console.error('Error editing email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Email:
        <input
          type="email"
          value={newEmail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmail(event.target.value);
          }}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditEmailForm;
