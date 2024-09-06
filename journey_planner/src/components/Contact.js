import React, { useState } from 'react';
import Map from './Map';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Form submission response:', data); // Debugging line
            
            // Show success message using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message has been successfully sent.',
                confirmButtonText: 'OK',
            });

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error:', error); // Debugging line
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error sending your message. Please try again later.',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div>
            <Map />
            <div className="bg-gray-50 dark:bg-gray-900" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
                    <h2 className="text-4xl font-bold dark:text-green-100 text-red-900">Get in Touch</h2>
                    <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
                        We’d love to hear from you! Whether you have questions about our journey planning services or need assistance, we're here to help. Reach out to us and we'll make sure your travel experience is seamless and enjoyable.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
                    <div>
                        <h2 className="text-lg font-bold dark:text-gray-100">Contact Us</h2>
                        <p className="max-w-sm mt-4 mb-4 dark:text-gray-400">
                            Have any questions or need support? Reach out to us through the following methods:
                        </p>
                        <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"></path>
                            </svg>
                            <span>456 Travel Road, Suite 789</span>
                        </div>
                        <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                            </svg>
                            <a href="mailto:support@journeyplannerexpress.com">support@journeyplannerexpress.com</a>
                        </div>
                        <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                            </svg>
                            <a href="tel:1234567890">+123 456 7890</a>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type="checkbox" id="" className="hidden" style={{ display: 'none' }} name="botcheck" />
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    autoComplete="off"
                                    className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email_address" className="sr-only">Email Address</label>
                                <input
                                    id="email_address"
                                    type="email"
                                    placeholder="Email Address"
                                    autoComplete="off"
                                    className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    placeholder="Message"
                                    rows="5"
                                    className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 text-base font-semibold text-white bg-red-600 rounded-md shadow-sm outline-none focus:ring-4 dark:bg-red-600 hover:bg-red-500 focus:ring-red-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
