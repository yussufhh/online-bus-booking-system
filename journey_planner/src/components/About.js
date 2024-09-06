import React from 'react';
import { Link } from 'react-router-dom';
import Abno from './Abno';

function About() {
  return (
    <>
      <div className="w-screen bg-red-800 flex justify-between items-center p-5">
        <h2 className="text-white text-left ml-20 text-2xl font-semibold">About Us</h2>
        <Link  exact path="/book">
          <button
            className="text-orange-900 bg-white hover:bg-gray-200 text-lg font-bold py-2 px-6 rounded mr-20"
          >
            Book A Bus
          </button>
        </Link>
      </div>
      <Abno />
    </>
  );
}

export default About;
