import { useState } from 'react';

const Interested = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cardContainerStyle = {
    position: 'relative', // Ensures the image can be positioned absolutely within this container
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: isHovered
      ? '0 4px 10px rgba(0, 0, 0, 0.2)' // Stronger shadow on hover
      : '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  };



  const cardBodyStyle = {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    flex: '1',
    textAlign: 'center',
    marginLeft: '120px', // Creates space for the image
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const cardTextStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const containerStyle = {
    marginTop: '30px',
    marginBottom: '30px',
  };

  const headerTextStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: '#fff'
  };

  return (
    <section className="custom-container" style={containerStyle}>
      <h3 className="header-text" style={headerTextStyle}>
        Journey_Planner Express - Online Booking
      </h3>
      <article
        style={cardContainerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image positioned at the left edge */}
      
        <div style={cardBodyStyle}>
          <h5 style={cardTitleStyle}>Lighten Up, Smile More</h5>
          <p style={cardTextStyle}>
            Get every aspect of your experience a little bit better.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Interested;
