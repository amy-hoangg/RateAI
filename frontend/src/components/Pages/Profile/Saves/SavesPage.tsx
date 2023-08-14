import React, { useEffect, useState } from "react";
import usersService from "../../../../service/usersService";
import { TypeSingleAI } from "../../../../types";
import AIsList from "../../AITools/AIsList";

const SavesPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [aisSaved, setAisSaved] = useState<TypeSingleAI[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const user_id = localStorage.getItem("userId");
      console.log("user_id:", user_id); // Add this line to check if user_id is correctly retrieved
      if (user_id) {
        usersService
          .getOneUser(user_id)
          .then((user) => {
            console.log("user:", user); // Add this line to see the user object received
            if (user.user_saves_ai_id) {
              console.log("user.user_saves_ai_id:", user.user_saves_ai_id); // Add this line to see the saved AI IDs
              setAisSaved(user.user_saves_ai_id);
            }
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [isLoggedIn]);

  console.log("aisSaved:", aisSaved); // Add this line to see the final aisSaved array

  return (
    <>
      {!isLoggedIn ? (
        <div>
          <h1>Welcome to Your Wishlist</h1>
          <p>
            Please <a href="http://localhost:3000/sign-in">log in</a> to add AIs to your wishlist. Don't have an account
            yet?
            <a href="http://localhost:3000/sign-up"> Sign up</a>
          </p>
        </div>
      ) : (
        <div>
          <h1>My Wishlist</h1>
          <p>Number of items: {aisSaved.length}</p>
          {/* Render the list of saved AI items */}
          <AIsList ais={aisSaved} />
        </div>
      )}
    </>
  );
};

export default SavesPage;
