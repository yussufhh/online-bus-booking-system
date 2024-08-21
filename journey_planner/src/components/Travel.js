import React from 'react';
import './Travel.css';

const Travel = () => {
  return (
    <div className="travel-container">
      <h1>We Provide You An Ultimate Travel Experience</h1>
      <p>Book Madaraka Express tickets from the comfort of your homes.</p>
      
      <div className="cards-wrapper">
        <div className="travel-card">
          <img src="https://metickets.krc.co.ke/images/travel.png" alt="Travel" />
          <div className="card-details">
            <h2>Travel</h2>
            <p>Enjoy your journey with comfort and style! Submerge yourself with the beautiful scenery of Kenya's unique landscapes.</p>
          </div>
        </div>

        <div className="travel-card">
          <img src="https://metickets.krc.co.ke/images/discover.png" alt="Discover" />
          <div className="card-details">
            <h2>Discover</h2>
            <p>Visit places and people that contribute to the variety and richness of our Kenyan culture. Create experiences that last a lifetime!</p>
          </div>
        </div>

        <div className="travel-card">
          <img src="https://metickets.krc.co.ke/images/enjoy.png" alt="Enjoy" />
          <div className="card-details">
            <h2>Enjoy</h2>
            <p>Be entertained in Kenya, from eating seafood at your best restaurant in Mombasa to excursions in Tsavo National Parks and many more!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
