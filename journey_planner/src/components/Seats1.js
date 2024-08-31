import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Seats1 = () => {
  const location = useLocation();
  const history = useHistory();
  const booking = location.state?.booking;

  useEffect(() => {
    if (booking) {
      fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(data => {
        // Pass the posted data to Seats2.js
        history.push('/seats2', { booking: data });
      })
      .catch(error => {
        console.error('Error posting booking:', error);
        alert('Failed to post booking data.');
      });
    }
  }, [booking, history]);

  return (
    <div className="seats-container">
      <h2>Processing Your Booking...</h2>
      {/* Optionally, you can display a loading spinner here */}
    </div>
  );
};

export default Seats1;
