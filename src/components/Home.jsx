// src/components/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file
import Navbar from './Navbar';

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore-jobs');
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="suma">
        <div className="suma1">
          <h1>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."</h1>
          <button onClick={handleExploreClick}>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
