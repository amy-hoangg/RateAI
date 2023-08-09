import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomeBanner = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleExploreAI = () => {
        navigate('/ais'); // Navigate to the AI Tools page
    };

    return (
        <div>
            <h2>UNLOCK THE POTENTIAL OF ARTIFICIAL INTELLIGENCE
            EMPOWERING YOUR VISION FOR TOMORROW</h2>
            <p>Welcome to our cutting-edge platform, 
                where we empower businesses to harness the full potential of Artificial Intelligence 
                and propel themselves into the future.
            </p>
            <button onClick={handleExploreAI}>Explore AI</button>
            <button>Rate AI</button>
        </div>
    );
};

export default HomeBanner;
