import React, { useEffect, useState } from "react";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token is present in local storage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

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

      {/* Conditionally render Sign In and Sign Up based on isLoggedIn */}
      {!isLoggedIn && (
        <>
          <AppBarTab to="/sign-in">Sign in</AppBarTab>
          <AppBarTab to="/sign-up">Sign Up</AppBarTab>
        </>
      )}

      {/* Conditionally render Profile button based on isLoggedIn */}
      {isLoggedIn && (
        <div
          onMouseEnter={handleProfileDropdownHoverAndClick}
          onMouseLeave={handleProfileDropdownMouseLeave}
        >
          <button>Profile</button>
          {showProfileDropdown && (
            <div>
              <AppBarTab to="/sign-out">Sign out</AppBarTab>
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
