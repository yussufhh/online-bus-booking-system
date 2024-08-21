import React from 'react';

const CardComponent = () => {
  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#F5F5F5',
    marginTop: '60px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    overflow: 'hidden',
    width: '18rem',
    textAlign: 'center',
    flex: '1 0 auto',
    cursor: 'pointer',
  };

  const cardImgStyle = {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease', // Added filter for brightness
  };

  const cardBodyStyle = {
    padding: '1rem',
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    margin: '0',
    color: '#333',
  };

  const cardTextStyle = {
    fontSize: '1rem',
    color: '#555',
    margin: '0',
  };

  const cardImgHoverStyle = {
    transform: 'scale(1.1)', // Increase the scale for a bigger effect
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // Increase shadow for more depth
    filter: 'brightness(1.2)', // Increase brightness
  };

  return (
    <div>
      <h1 style={{ color: '#ff5624', fontSize: '25px' }}>
        Journey_Planner Express
      </h1>
      <p>Enjoy the following features by booking and travelling with Madaraka Express.</p>

      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <img
            src="https://metickets.krc.co.ke/images/gallery/interior-of-economy-class-coach.jpg"
            alt="Seat Booking"
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
            <h5 style={cardTitleStyle}>Get a Seat Ahead of Time</h5>
            <p style={cardTextStyle}>Book from anywhere and get a seat reserved.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img
            src="https://metickets.krc.co.ke/images/gallery/28_n.jpg"
            alt="Customer Service"
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
            <h5 style={cardTitleStyle}>Excellent Customer Service</h5>
            <p style={cardTextStyle}>Get more than you expect - in unexpected and helpful ways.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img
            src="https://metickets.krc.co.ke/images/gallery/62_n.jpg"
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

        <div style={cardStyle}>
          <img
            src="https://metickets.krc.co.ke/images/global-map.jpg"
            alt="Magnificent Views"
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
            <h5 style={cardTitleStyle}>Magnificent Views</h5>
            <p style={cardTextStyle}>
              Enjoy breathtaking views - Have an adventurous journey all the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
