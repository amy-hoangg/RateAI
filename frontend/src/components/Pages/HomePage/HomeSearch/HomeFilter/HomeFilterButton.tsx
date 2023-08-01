import React, { useState } from 'react';
import HomeFilterWindow from './HomeFilterWindow';

const HomeFilterButton = () => {
  const [isHomeFilterVisible, setIsHomeFilterVisible] = useState(false);

  const handleToggleHomeFilter = () => {
    setIsHomeFilterVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggleHomeFilter}>Filter</button>
      {isHomeFilterVisible 
      && 
      <HomeFilterWindow onApplyHomeFilterWindow={() => {}} />}
    </div>
  );
};

export default HomeFilterButton;

