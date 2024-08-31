

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
  return (
    <div className='container12'>
      <h3 className='header-text'>Journey_Planner Express - Online Booking</h3>
      <div style={cardStyle}>
       
        <div style={cardBodyStyle}>
          <h5 style={cardTitleStyle}>Lighten Up, Smile More</h5>
          <p style={cardTextStyle}>Get every aspect of your experience a little bit better.</p>
        </div>
      </div>
    </div>
  );
}

export default Interested;
