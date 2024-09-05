import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  return (
    <>
      <div className="w-screen bg-red-800 flex justify-between items-center p-2">
        <h2 className="text-white text-left ml-20 text-xl">Search Result</h2>
        <Link to="/">
          <button className="text-orange-900 bg-white hover:bg-gray-200 text-lg py-2 px-6 rounded mr-14">
            Book A Bus
          </button>
        </Link>
      </div>

      {/* Background Section */}
      <div className="background-section"></div>

      {/* Flex sections with images and text */}
      <div className="info-sections">
        <div className="info-card">
          <img src="https://buupass.com/assets/img/company1/payments.webp" alt="Flexible Payments" className="info-image" />
          <div>
            <h3>Flexible Payments</h3>
            <p>Pay with M-pesa, credit cards, or bank transfers. We have you fully covered.</p>
          </div>
        </div>

        <div className="info-card">
          <img src="https://buupass.com/assets/img/company1/support.webp" alt="Great Customer Care" className="info-image" />
          <div>
            <h3>Great Customer Care</h3>
            <p>Get excellent customer service available from 8:00 AM to 10:00 PM via phone, chat, or email.</p>
          </div>
        </div>

        <div className="info-card">
          <img src="https://buupass.com/assets/img/company1/support.webp" alt="Enjoy Convenience" className="info-image" />
          <div>
            <h3>Enjoy Convenience</h3>
            <p>Book anytime from the convenience of your office, home, school, or market.</p>
          </div>
        </div>
      </div>

      {/* Booking Information Section */}
  <CheckoutForm/>
    </>
  );
}

export default Payment;
