import React, { useState } from "react";
import AppBarTab from "./AppBarTab";
import { useAuth } from "../../context/AuthContext"; // Update with the correct import path

const AppBar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { isAuthenticated, signOut } = useAuth(); // Use the isAuthenticated and signOut functions from your AuthContext

  const handleProfileDropdownHoverAndClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleProfileDropdownMouseLeave = () => {
    setShowProfileDropdown(false);
  };

  return (
    <>
      <AppBarTab to="/">My AI.com</AppBarTab>
      <AppBarTab to="/ais">AI Tools</AppBarTab>
      <AppBarTab to="/news">News</AppBarTab>

      {/* Conditionally render Sign In and Sign Up based on isAuthenticated */}
      {!isAuthenticated && (
        <>
          <AppBarTab to="/sign-in">Sign in</AppBarTab>
          <AppBarTab to="/sign-up">Sign Up</AppBarTab>
        </>
      )}

      {/* Conditionally render Profile button based on isAuthenticated */}
      {isAuthenticated && (
        <div
          onMouseEnter={handleProfileDropdownHoverAndClick}
          onMouseLeave={handleProfileDropdownMouseLeave}
        >
          <button>Profile</button>
          {showProfileDropdown && (
            <div>
              <AppBarTab to="/sign-out" onClick={signOut}>Sign out</AppBarTab>
              <AppBarTab to="/profile">Profile Setting</AppBarTab>
            </div>
          )}
        </div>
      )}

      <AppBarTab to="/sell">Sell AI</AppBarTab>
      <AppBarTab to="/saves">Saves</AppBarTab>
      <AppBarTab to="/cart">Cart</AppBarTab>
    </>
  );
};

export default AppBar;
