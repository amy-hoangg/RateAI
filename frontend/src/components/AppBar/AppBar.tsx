import React, { useState } from "react";
import AppBarTab from "./AppBarTab";
import { TypeAppBarProps } from "../../types";

const AppBar = ({ currentUser, onSignOut }: TypeAppBarProps) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleProfileDropdownHoverAndClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <>
      <AppBarTab to="/">My AI.com</AppBarTab>
      <AppBarTab to="/ais">AI Tools</AppBarTab>
      <AppBarTab to="/news">News</AppBarTab>
      <AppBarTab to="/sign-in">Sign in</AppBarTab>
      <AppBarTab to="/sign-up">Sign Up</AppBarTab>

      <button
        onMouseEnter={handleProfileDropdownHoverAndClick}
        onMouseLeave={handleProfileDropdownHoverAndClick}
      >
        Profile
      </button>

      {showProfileDropdown && (
        <div>
          <AppBarTab to="/sign-out">Sign out</AppBarTab>
          <AppBarTab to="/profile">Profile</AppBarTab>
        </div>
      )}

      <AppBarTab to="/sell">Sell AI</AppBarTab>
      <AppBarTab to="/saves">Saves</AppBarTab>
      <AppBarTab to="/cart">Cart</AppBarTab>
    </>
  );
};

export default AppBar;

/**
 *      {currentUser 
       
        ? (
        <>
          <AppBarTab to="/sell">Sell AI</AppBarTab>
          <AppBarTab to="/sign-out">Sign out</AppBarTab>
          <AppBarTab to="profile">Profile</AppBarTab>
          <AppBarTab to="cart">Cart</AppBarTab>
        </>) 
        
        : (
          <>
            <AppBarTab to="/sign-in">Sign in</AppBarTab>
            <AppBarTab to="/sign-up">Sign Up</AppBarTab>
          </>
      )} 
 */
