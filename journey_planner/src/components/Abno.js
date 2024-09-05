import React from 'react';
import './Abno.css';
import Mission from '../components/Mission';
import Destination from './Destination';

function Abno() {
  return (
    <>
      <div className="Abno1">
        <div className="images">
          <img src='https://metickets.krc.co.ke/images/gallery/07_n.jpg' alt='fast imag' />
          <img src='https://metickets.krc.co.ke/images/gallery/46_n.jpg' alt='Imag2' />
          <img src='https://metickets.krc.co.ke/images/gallery/71_n.jpg' alt='Imag 3' />
          <img src='https://metickets.krc.co.ke/images/gallery/02_n.jpg' alt='Imag 4' />
          <img src='https://metickets.krc.co.ke/images/gallery/60_n.jpg' alt='Imag 5' />
          <img src='https://metickets.krc.co.ke/images/gallery/93_n.jpg' alt='Imag 6' />
        </div>
        <div className="contentt">
          <h2 className='h2-tack'>About Journey Planner Express</h2>
          <p className='p-1'>
            <span>Journey Planner Express</span> is your go-to solution for planning efficient and hassle-free travel across Kenya. Whether you're commuting within a city or traveling long distances, our service ensures that you have access to the best routes, schedules, and travel options to suit your needs.
          </p>
          <ul className='ul-tack'>
            <li>Discover the fastest routes for your journey</li>
            <li>Access real-time schedule updates</li>
            <li>Book tickets easily through our platform</li>
            <li>Get insights into travel times and distances</li>
          </ul>
        </div>
      </div>
      <p className='p-tack'>
        At Journey Planner Express, we are committed to making travel across Kenya as seamless as possible. Our platform is designed to provide comprehensive travel information, helping you make informed decisions and enjoy a smooth journey every time.
      </p>
      <Destination/>
      <Mission />
    </>
  );
}

export default Abno;
