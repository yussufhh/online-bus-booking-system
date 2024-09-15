import React, { useEffect, useState } from 'react';
import Users from './Users';

const BookedSeats = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch the booking data from the endpoint
    fetch('http://localhost:3000/bookedseats')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching booking data:', error));
  }, []);

  const getFare = (trainType) => {
    switch (trainType) {
      case 'express':
        return '$100';
      case 'local':
        return '$50';
      case 'sleeper':
        return '$150';
      default:
        return '$0';
    }
  };

  // Update booking by making a PUT request to the server
  const updateBooking = (id, updatedBooking) => {
    fetch(`http://localhost:3000/bookedseats/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBooking),
    })
      .then(response => response.json())
      .then(updatedData => {
        setBookings(bookings.map(booking => booking.id === id ? updatedData : booking));
      })
      .catch(error => console.error('Error updating booking:', error));
  };

  // Delete booking by making a DELETE request to the server
  const deleteBooking = (id) => {
    fetch(`http://localhost:3000/bookedseats/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBookings(bookings.filter(booking => booking.id !== id));
      })
      .catch(error => console.error('Error deleting booking:', error));
  };

  return (
    <div>
      <div className="container mx-auto p-6 bg-red-400 mt-5 mb-5">
        <h3 className="text-2xl font-bold mb-4 text-white">Booked Seats</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-orange-400">
            <thead className="bg-red-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Train Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Seat Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Fare</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-red-700 divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{booking.trainType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{booking.fromLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{booking.toLocation}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{booking.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{booking.seatNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{getFare(booking.trainType)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mr-2 rounded"
                      onClick={() => updateBooking(booking.id, { ...booking, seatNumber: booking.seatNumber + 1 })} // Example update
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      onClick={() => deleteBooking(booking.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Users />
    </div>
  );
};

export default BookedSeats;
