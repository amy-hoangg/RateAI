import React, { useEffect, useState } from "react";
import usersService from "../../../../service/usersService";
import { TypeUser } from "../../../../types";
import { useAuth } from "../../../../context/AuthContext";

const ProfilePage = () => {
  const [user, setUser] = useState<TypeUser | null>(null);
  const { isAuthenticated } = useAuth();

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

  return (
    <div>
      {user && (
        <>
          <h1>User Profile</h1>
          <p>Username: {user.user_name}</p>
          <p>First Name: {user.user_firstname}</p>
          <p>Last Name: {user.user_lastname}</p>
          <p>Email: {user.user_email}</p>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
