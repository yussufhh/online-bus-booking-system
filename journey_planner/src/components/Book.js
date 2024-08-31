import React from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you use React Router
import './Form.css';

const Book = () => {
  const history = useHistory(); // Use history to navigate to Seats1 component

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const bookingData = {
      trainType: formData.get('trainType'),
      fromLocation: formData.get('fromLocation'),
      toLocation: formData.get('toLocation'),
      date: formData.get('date'),
    };

    // Navigate to the Seats1 component and pass the booking data
    history.push('/seats1', { booking: bookingData });
  };

  return (
    <div className="custom-container">
      <h3 className="custom-header-text">Journey_Planner Express - Online Booking</h3>
      <form className="custom-form" onSubmit={handleSubmit}>
        <label htmlFor="trainType" className="custom-text-head">Bus type</label>
        <select id="trainType" name="trainType" className="custom-select" required>
          <option value="">Select</option>
          <option value="express">Express</option>
          <option value="local">Local</option>
          <option value="sleeper">Sleeper</option>
        </select>

        <label htmlFor="fromLocation" className="custom-text-head">From</label>
        <select id="fromLocation" name="fromLocation" className="custom-select" required>
          <option value="">Select</option>
          <option value="mandera">Mandera</option>
          <option value="wajir">Wajir</option>
          <option value="garissa">Garissa</option>
          <option value="marsabit">Marsabit</option>
          <option value="isiolo">Isiolo</option>
          <option value="lamu">Lamu</option>
          <option value="mombasa">Mombasa</option>
          <option value="nairobi">Nairobi</option>
          <option value="kisumu">Kisumu</option>
        </select>

        <label htmlFor="toLocation" className="custom-text-head">To</label>
        <select id="toLocation" name="toLocation" className="custom-select" required>
          <option value="">Select</option>
          <option value="mandera">Mandera</option>
          <option value="wajir">Wajir</option>
          <option value="garissa">Garissa</option>
          <option value="marsabit">Marsabit</option>
          <option value="isiolo">Isiolo</option>
          <option value="lamu">Lamu</option>
          <option value="mombasa">Mombasa</option>
          <option value="nairobi">Nairobi</option>
          <option value="kisumu">Kisumu</option>
        </select>

        <label className="custom-text-head">Departure Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="custom-input-date"
          required
        />

        <button type="submit" className="custom-button">Book a Bus</button>
      </form>
    </div>
  );
}

export default Book;
