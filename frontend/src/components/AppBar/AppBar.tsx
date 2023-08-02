import React from 'react';
import AppBarTab from './AppBarTab';
import { TypeAppBarProps } from '../../types';

const AppBar = ({ currentUser, onSignOut }: TypeAppBarProps) => {
  return (
    <>
      <AppBarTab to='/'>My AI.com</AppBarTab>
      <AppBarTab to="/ais">AI Tools</AppBarTab>
      <AppBarTab to="/news">News</AppBarTab>
      <AppBarTab to="/sell">Sell AI</AppBarTab>

      {currentUser 
       
        ? (
        <>
          <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
          <AppBarTab onPress={onSignOut}>Profile</AppBarTab>
          <AppBarTab onPress={onSignOut}>Shopping List</AppBarTab>
        </>) 
        
        : (
          <div>
            <AppBarTab to="/sign-in">Sign in</AppBarTab>
            <AppBarTab to="/sign-up">Sign Up</AppBarTab>
          </div>
      )}
    </>
  );
};

export default AppBar;

