import React from 'react';
import {TypeAppBarTabProps} from '../../types'

const AppBarTab = ({ children, to, ...props }  : TypeAppBarTabProps ) => {

  const content = (
    <div>
      <span>{children}</span>
    </div>
  );

  return to 

    ? (
    <a href={to} {...props}>
      {content}
    </a>) 

    : (
    <button type="button" {...props}>
      {content}
    </button>
  );
};

export default AppBarTab;
