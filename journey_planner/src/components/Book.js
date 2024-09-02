import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Form.css';

const Book = () => {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (selectedDate) {
      // Fetch booked seats for the selected date
      fetch(`http://localhost:3000/bookedseats?date=${selectedDate}`)
        .then((response) => response.json())
        .then((data) => {
          const seats = data.map((booking) => booking.seatNumber);
          setBookedSeats(seats);
        })
        .catch((error) => {
          console.error('Error fetching booked seats:', error);
        });
    }
  }, [selectedDate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fromLocation === toLocation) {
      Swal.fire({
        title: "Error",
        text: "From and To locations cannot be the same.",
        icon: "error"
      });
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    const bookingData = {
      trainType: formData.get('trainType'),
      fromLocation: formData.get('fromLocation'),
      toLocation: formData.get('toLocation'),
      date: formData.get('date'),
      seatNumber: formData.get('seatNumber'),
    };

    fetch('http://localhost:3000/bookedseats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to post booking data.');
        }
        return response.json();
      })
      .then((result) => {
        console.log('Booking successful:', result);
        Swal.fire({
          title: "Good job!",
          text: "Your booking was successful!",
          icon: "success"
        });
        history.push('/bookedseats');
      })
      .catch((error) => {
        console.error('Error posting booking data:', error);
      });
  };

  // Generate seat options dynamically
  const seatOptions = Array.from({ length: 100 }, (_, index) => {
    const seatNumber = index + 1;
    return (
      <option key={seatNumber} value={seatNumber} disabled={bookedSeats.includes(seatNumber)}>
        {seatNumber} {bookedSeats.includes(seatNumber) ? '(Booked)' : ''}
      </option>
    );
  });

  // List of location options
  const locationOptions = [
    'mandera', 'wajir', 'garissa', 'marsabit', 'isiolo', 'lamu', 'mombasa', 'nairobi', 'kisumu'
  ];

  return (
    <div className="custom-container">
      <h3 className="custom-header-text">Journey Planner Express - Online Booking</h3>
      <form className="custom-form" onSubmit={handleSubmit}>
        <label htmlFor="trainType" className="custom-text-head">Bus Type</label>
        <select id="trainType" name="trainType" className="custom-select" required>
          <option value="">Select</option>
          <option value="express">Express</option>
          <option value="local">Local</option>
          <option value="sleeper">Sleeper</option>
        </select>

        <label htmlFor="fromLocation" className="custom-text-head">From</label>
        <select
          id="fromLocation"
          name="fromLocation"
          className="custom-select"
          required
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
        >
          <option value="">Select</option>
          {locationOptions.map((location) => (
            <option key={location} value={location}>
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </option>
          ))}
        </select>

        <label htmlFor="toLocation" className="custom-text-head">To</label>
        <select
          id="toLocation"
          name="toLocation"
          className="custom-select"
          required
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
        >
          <option value="">Select</option>
          {locationOptions.map((location) => (
            <option key={location} value={location} disabled={location === fromLocation}>
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </option>
          ))}
        </select>

        <label htmlFor="date" className="custom-text-head">Departure Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="custom-input-date"
          required
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <label htmlFor="seatNumber" className="custom-text-head">Seat Number</label>
        <select id="seatNumber" name="seatNumber" className="custom-select" required>
          <option value="">Select</option>
          {seatOptions}
        </select>

        <button type="submit" className="custom-button">Book a Bus</button>
      </form>
    </div>
  );
};

export default Book;
