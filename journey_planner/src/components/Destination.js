import React from 'react';
import './Destination.css';
// import Services from './Services';

const Destination = () => {
  const destinations = [
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/mombasa.webp",
      alt: "Mandera",
    },
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/kisumu.webp",
      alt: "Wajir",
    },
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/ams.jpg",
      alt: "Garissa",
    },
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/n_y.jpg",
      alt: "Nairobi",
    },
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/r.jpg",
      alt: "Kisumu",
    },
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/r.jpg",
      alt: "Kisumu",
    },
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/n_y.jpg",
      alt: "Nairobi",
    },
    {
      src: "https://v2.flights.buupass.com/assets/img/cty/ams.jpg",
      alt: "Garissa",
    },
  ];

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-orange-600">Popular Destinations</h1>
        <h4 className="text-gray-400 mt-2">Save Your Money With Our Best Offers</h4>
      </div>
  
      <div className="stations-container">
        <div className="stations-row">
          {destinations.slice(0, 4).map((destination, index) => (
            <div key={index} className="station-item">
              <img src={destination.src} alt={destination.alt} />
              <div className="station-text">{destination.alt}</div>
            </div>
          ))}
        </div>
        <div className="stations-row">
          {destinations.slice(4).map((destination, index) => (
            <div key={index} className="station-item">
              <img src={destination.src} alt={destination.alt} />
              <div className="station-text">{destination.alt}</div>
            </div>
          ))}
        </div>
      </div>
      {/* <Services/> */}
    </>
  );
};

export default Destination;
