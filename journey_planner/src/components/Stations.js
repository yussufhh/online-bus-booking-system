import React from 'react';
import './Stations.css';

const Stations = () => {
  const images = [
    {
      src: "https://metickets.krc.co.ke/images/stations/54_n.jpg",
      alt: "Nairobi Terminus",
      text: "<strong>Nairobi Terminus</strong><br />Kenya"
    },
    {
      src: "https://metickets.krc.co.ke/images/stations/84_n.jpg",
      alt: "Mtito Andei Station",
      text: "<strong>Mtito Andei Station</strong><br />Kenya"
    },
    {
      src: "https://metickets.krc.co.ke/images/stations/85_n.jpg",
      alt: "Mombasa Terminus",
      text: "<strong>Mombasa Terminus</strong><br />Kenya"
    },
    {
      src: "https://metickets.krc.co.ke/images/stations/voi.jpg",
      alt: "Voi Station",
      text: "<strong>Voi Station</strong><br />Kenya"
    },
    {
      src: "https://metickets.krc.co.ke/images/stations/athi_river.jpg",
      alt: "Athi River Station",
      text: "<strong>Athi River Station</strong><br />Kenya"
    },
    {
      src: "https://metickets.krc.co.ke/images/stations/emali.jpg",
      alt: "Emali Station",
      text: "<strong>Emali Station</strong><br />Kenya"
    },
    {
      src: "https://metickets.krc.co.ke/images/stations/mariakani.jpg",
      alt: "Mariakani Station",
      text: "<strong>Mariakani Station</strong><br />Kenya"
    },
    {
      src: "https://metickets.krc.co.ke/images/stations/miasenyi_s.jpg",
      alt: "Miasenyi Station",
      text: "<strong>Miasenyi Station</strong><br />Kenya"
    }
  ];

  return (
    <div className="stations-container">
      <div className="stations-row">
        {images.slice(0, 4).map((image, index) => (
          <div key={index} className="station-item">
            <img src={image.src} alt={image.alt} />
            <p className="station-text" dangerouslySetInnerHTML={{ __html: image.text }}></p>
          </div>
        ))}
      </div>
      <div className="stations-row">
        {images.slice(4, 8).map((image, index) => (
          <div key={index + 4} className="station-item">
            <img src={image.src} alt={image.alt} />
            <p className="station-text" dangerouslySetInnerHTML={{ __html: image.text }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stations;
