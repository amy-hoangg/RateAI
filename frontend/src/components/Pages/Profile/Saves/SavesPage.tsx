import React, { useEffect, useState } from "react";
import usersService from "../../../../service/usersService";
import { TypeSingleAI } from "../../../../types";
import AIsList from "../../AITools/AIsList";
import { useAuth } from "../../../../context/AuthContext"; // Import the useAuth hook

const SavesPage = () => {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook instead of managing isLoggedIn state
  const [aisSaved, setAisSaved] = useState<TypeSingleAI[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      const user_id = localStorage.getItem("userId");
      console.log("user_id:", user_id);
      if (user_id) {
        usersService
          .getOneUser(user_id)
          .then((user) => {
            console.log("user:", user);
            if (user.user_saves_ai_id) {
              console.log("user.user_saves_ai_id:", user.user_saves_ai_id);
              setAisSaved(user.user_saves_ai_id);
            }
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [isAuthenticated]);

  console.log("aisSaved:", aisSaved);

  return (
    <>
      {!isAuthenticated ? (
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
