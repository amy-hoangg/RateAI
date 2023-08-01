import React from 'react';
import AppBarTab from './AppBarTab';
import { TypeAppBarProps } from '../../types';

const AppBar = ({ currentUser, onSignOut }: TypeAppBarProps) => {
  return (
    <>
      <AppBarTab to="/">AI Tools</AppBarTab>
      <AppBarTab to="/">How to</AppBarTab>
      <AppBarTab to="/">News</AppBarTab>
      <AppBarTab to="/">Sell AI</AppBarTab>

      {currentUser 
       
        ? (
        <>
          <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
          <AppBarTab onPress={onSignOut}>Profile</AppBarTab>
          <AppBarTab onPress={onSignOut}>Shopping List</AppBarTab>
        </>) 
        
        : (
        <AppBarTab to="/sign-in">Sign in</AppBarTab>
      )}
    </>
  );
};

export default AppBar;

