import React, { useEffect, useState } from "react";
import usersService from "../../../../service/usersService"; // Import your API service
import { TypeSingleAI } from "../../../../types";
import AIsList from "../../AITools/AIsList";

const SavesPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [aisSaved, setAisSaved] = useState<TypeSingleAI[]>([]);

  useEffect(() => {
    // Check if token is present in local storage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const user_id = localStorage.getItem("userid");
      // Retrieve user's saved AIs from backend
      if (user_id) {
        usersService
          .getOneUser(user_id) // Pass the appropriate user ID
          .then((user) => {
            if (user.user_saves_ai_id) {
              setAisSaved(user.user_saves_ai_id);
            }
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn ? (
        <div>
          <h1>Welcome to Your Wishlist</h1>
          <p>
            Please log in to add AIs to your wishlist. Don't have an account
            yet?
            <a href="/signup"> Sign up</a>
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
