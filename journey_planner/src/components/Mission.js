import React, { useState } from 'react';
import './Misssion.css';

const data = {
  coreValues: [
    {
      title: 'Customer Focus',
      content: 'We are committed to achieving the highest levels of customer satisfaction through continuous improvement of our services.',
    },
    {
      title: 'Integrity & Teamwork',
      content: 'We are guided by probity and highest business ethics in carrying out our business. We operate as a team and fully subscribe to the principles of teamwork as a key attribute to achieving our objectives.',
    },
    {
      title: 'Professionalism',
      content: 'We adhere to impeccable professional and personal standards while conducting the affairs of the Corporation. The Corporation’s services shall be offered in a professional manner and with expertise that ensures high quality.',
    },
  ],
  knowMore: [
    {
      title: 'Our Vision',
      content: 'We adhere to impeccable professional and personal standards while conducting the affairs of the Corporation. The Corporation’s services shall be offered in a professional manner and with expertise that ensures high quality.',
    },
    {
      title: 'Our Mission',
      content: 'To develop an integrated rail network and provide efficient and safe rail services.',
    },
    {
      title: 'Our Mandate',
      content: 'Provide skills and technology for the railway sector. Provide efficient and effective railway services. Leverage our assets to grow business. Promotion, facilitation, and participation in national and metropolitan railway network development.',
    },
  ],
};

const  Mission  = () =>{
  const [coreValuesExpanded, setCoreValuesExpanded] = useState({});
  const [knowMoreExpanded, setKnowMoreExpanded] = useState({});

  const toggleCoreValuesExpand = (index) => {
    setCoreValuesExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleKnowMoreExpand = (index) => {
    setKnowMoreExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderSection = (items, toggleExpand, expandedState) => {
    return items.map((item, index) => (
      <div key={index} className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => toggleExpand(index)}
        >
          <span className="toggle-icon">{expandedState[index] ? '-' : '+'}</span>
          {item.title}
        </div>
        {expandedState[index] && (
          <div className="accordion-content">
            {item.content}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="core-values-container">
      <div className="core-values-section">
        <h3>Our Core Values</h3>
        {renderSection(data.coreValues, toggleCoreValuesExpand, coreValuesExpanded)}
      </div>
      <div className="know-more-section">
        <h3>Know More About Us</h3>
        {renderSection(data.knowMore, toggleKnowMoreExpand, knowMoreExpanded)}
      </div>
    </div>
  );
}

export default Mission;