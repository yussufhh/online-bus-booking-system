import React from 'react';
import Travel from './Travel';
import Book from './Book';
import Experience from './Experience';
import Interested from './Interested';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Book />
            <Gallery />
            <Travel />
            <Experience />
            <Interested />
        </div>
    );
};

export default Home;
