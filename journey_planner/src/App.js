import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stations from './components/Stations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import BookedSeats from './components/BookedSeats';
import Payment from './components/Payment';
import Login from './Login';
import Users from './components/Users'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state
  const history = useHistory();

  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication to true after successful login
    history.push('/'); // Redirect to the home page
  };

  return (
    <div className="App">
      <Navbar />
      <Switch>
        {isAuthenticated ? (
          <>
            <Route exact path="/stations">
              <Stations />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/bookedseats">
              <BookedSeats />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/login">
            <Login onLogin={handleLogin} />
          </Route>
        )}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
