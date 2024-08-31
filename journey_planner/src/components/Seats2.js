import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Seats2 = () => {
  const location = useLocation();
  const booking = location.state?.booking;

  useEffect(() => {
    if (booking) {
      fetch('http://localhost:3000/bookedposted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Booking successfully posted:', data);
        // Optional: Display confirmation or navigate further if needed
      })
      .catch(error => {
        console.error('Error posting booking to bookedposted:', error);
        alert('Failed to post booking data to bookedposted.');
      });
    }
  }, [booking]); // Dependency array: re-run effect if `booking` changes

  return (
    <div className="seats-container">
      <h2>Booking Completed</h2>
      {booking ? (
        <div>
          <p><strong>Bus Type:</strong> {booking.trainType}</p>
          <p><strong>From:</strong> {booking.fromLocation}</p>
          <p><strong>To:</strong> {booking.toLocation}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          {/* Additional booking details can be displayed here */}
        </div>
      ) : (
        <p>No booking information available.</p>
      )}
    </div>
  );
};

export default Seats2;
