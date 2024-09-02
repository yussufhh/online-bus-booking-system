import React from 'react';
import { useHistory } from 'react-router-dom';
import Abno from './Abno';

function About() {
  const history = useHistory();

  const handleBookBusClick = () => {
    history.push('/book');
  };

  return (
    <>
      <div className="w-screen bg-red-800 flex justify-between items-center p-5">
        <h2 className="text-white text-left ml-20 text-2xl font-semibold">About Us</h2>
        <button
          onClick={handleBookBusClick}
          className="text-orange-900 bg-white hover:bg-gray-200 text-lg font-bold py-2 px-6 rounded mr-20"
        >
          Book A Bus
        </button>
      </div>
      <Abno />
    </>
  );
}

export default About;
