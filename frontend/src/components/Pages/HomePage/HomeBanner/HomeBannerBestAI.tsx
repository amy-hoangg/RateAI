import React from 'react';
import { Link } from 'react-router-dom';

const HomeBannerBestAI = () => {
  return (
    <div>
      <h2>BEST TOOLS FOR BUSINESS</h2>
      <p>
        Welcome to our cutting-edge platform,
        where we empower businesses to harness the full potential of Artificial Intelligence
        and propel themselves into the future.
      </p>
      <p>discount...</p>
      
      {/* Use the Link component to navigate to "/ais" */}
      <Link to="/ais">
        <button>Buy now</button>
      </Link>
    </div>
  );
};

export default HomeBannerBestAI;

