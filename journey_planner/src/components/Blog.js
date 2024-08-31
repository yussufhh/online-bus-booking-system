import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-orange-800 mb-2">Journey Planner Express: Revolutionizing Travel</h1>
                    <p className="text-gray-600">Published on August 25, 2024</p>
                </div>
            </div>
            <div className="bg-white py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row">
                    <div className="w-full md:w-3/4 px-4">
                        <img 
                            src="https://images.unsplash.com/photo-1506157786151-b8491531f063" 
                            alt="Journey Planner Express Featured" 
                            className="mb-8"
                        />
                        <div className="prose max-w-none">
                            <p>Welcome to the blog of Journey Planner Express, where we explore how innovative technology is transforming travel planning. Our mission is to make journey planning as seamless and enjoyable as possible. With cutting-edge tools and personalized services, we help travelers design their perfect trips effortlessly.</p>
                            <p>At Journey Planner Express, we believe that travel should be an adventure from start to finish. That's why we've integrated advanced features into our platform to assist with every step of the journey. From personalized itinerary suggestions to real-time updates, our platform ensures a smooth and stress-free travel experience.</p>
                            <p>Our team is dedicated to providing exceptional service and support to all our users. We understand that every traveler has unique needs, and we're committed to delivering tailored solutions that meet those needs. Whether you're planning a business trip, family vacation, or solo adventure, Journey Planner Express is here to help you every step of the way.</p>
                            <p>Stay tuned for more updates and insights into how we're making travel planning easier and more enjoyable. We invite you to explore our platform and experience the difference for yourself. Happy travels!</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-4">
                        <div className="bg-gray-100 p-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="/blog/the-future-of-travel-tech" className="text-gray-700 hover:text-gray-900">The Future of Travel Tech</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/blog/top-destinations-for-2024" className="text-gray-700 hover:text-gray-900">Top Destinations for 2024</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/blog/travel-tips-for-the-modern-explorer" className="text-gray-700 hover:text-gray-900">Travel Tips for the Modern Explorer</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/blog/how-to-maximize-your-travel-budget" className="text-gray-700 hover:text-gray-900">How to Maximize Your Travel Budget</a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-4 mt-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Categories</h2>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <a href="/categories/travel-technology" className="text-gray-700 hover:text-gray-900">Travel Technology</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/categories/destination-guides" className="text-gray-700 hover:text-gray-900">Destination Guides</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/categories/travel-tips" className="text-gray-700 hover:text-gray-900">Travel Tips</a>
                                </li>
                                <li className="mb-2">
                                    <a href="/categories/budget-travel" className="text-gray-700 hover:text-gray-900">Budget Travel</a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-4 mt-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">About Us</h2>
                            <p className="text-gray-700">Journey Planner Express is dedicated to making travel planning easier and more enjoyable. Our expert team offers insights and advice to help you make the most of your trips.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
