

const Interested = () => {
  const cardBodyStyle = {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    flex: '1', // Ensure the body takes up remaining space
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

  const cardStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '8px',
    overflow: 'hidden',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const cardImgStyle = {
    width: '250px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '8px 0 0 8px',
    flexShrink: '0', // Prevent image from shrinking
  };

  const cardImgHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    filter: 'brightness(0.9)',
  };

  return (
    <div className='container12'>
      <h3 className='header-text'>Journey_Planner Express - Online Booking</h3>
      <div style={cardStyle}>
        <img
          src="https://metickets.krc.co.ke/images/plantrip.jpg"
          alt="Smile More"
          style={cardImgStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = cardImgHoverStyle.transform;
            e.currentTarget.style.boxShadow = cardImgHoverStyle.boxShadow;
            e.currentTarget.style.filter = cardImgHoverStyle.filter;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.filter = 'none';
          }}
        />
        <div style={cardBodyStyle}>
          <h5 style={cardTitleStyle}>Lighten Up, Smile More</h5>
          <p style={cardTextStyle}>Get every aspect of your experience a little bit better.</p>
        </div>
      </div>
    </div>
  );
}

export default Interested;
