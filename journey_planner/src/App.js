import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stations from './components/Stations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
import Hero from './components/Hero';
import BookedSeats from './components/BookedSeats'; // Import BookedSeats component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/stations">
          <Stations />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/hero">
          <Hero />
        </Route>
        <Route exact path="/bookedseats">
          <BookedSeats />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
