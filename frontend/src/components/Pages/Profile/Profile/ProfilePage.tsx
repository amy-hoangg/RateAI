import React, { useEffect, useState } from "react";
import usersService from "../../../../service/usersService";
import { TypeUser } from "../../../../types";
import { useAuth } from "../../../../context/AuthContext";
import EditNameForm from "./EditProfileForm";
import EditEmailForm from "./EditEmailForm";
const ProfilePage = () => {
  const [user, setUser] = useState<TypeUser | null>(null);
  const { isAuthenticated } = useAuth();
  const [showEditNameForm, setShowEditNameForm] = useState(false);
  const [showEditEmailForm, setShowEditEmailForm] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const userId = localStorage.getItem("userId");

      if (userId) {
        usersService
          .getOneUser(userId)
          .then((data) => {
            console.log("Fetched user data:", data);
            setUser(data);
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [isAuthenticated]);

  const handleEditNameClick = () => {
    setShowEditNameForm(!showEditNameForm)
  };

  const handleEmailClick = () => {
    setShowEditEmailForm(!showEditEmailForm)
  }
 
  return (
    <div>
      {user && (
        <>
          <h1>User Profile</h1>

          <p>Username: {user.user_name}</p> 

          <p>First Name: {user.user_firstname}</p>
          <p>Last Name: {user.user_lastname}</p>

          <button onClick={handleEditNameClick}>edit name</button>
          {showEditNameForm && (
            <EditNameForm onSubmit={(newName) => {
              console.log("new name", newName);
              setShowEditNameForm(false);
            }} 
            />
          )}


          <p>Email: {user.user_email}</p>
          <button onClick={handleEmailClick}>edit email</button>
          {showEditEmailForm && (
            <EditEmailForm onSubmit={(newEmail) => {
              console.log("newEmail", newEmail);
              setShowEditNameForm(false);
            }} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
