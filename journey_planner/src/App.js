import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stations from './components/Stations'
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Switch } from 'react-router-dom';
import Blog from './components/Blog';
import Seats1 from './components/Seats1';
import Seats2 from './components/Seats2';
import Hero from './components/Hero';

function App() {
  return (
   
      <div className="App">

        <Navbar />
        <Switch>
        
        <Route exact path="/stations">
          <Stations />
        </Route>
        <Route exact path="/contact">
        <Contact/>
        </Route>
        <Route exact path="/blog">
        <Blog/>
        </Route>
        <Route exact path="/seats1">
        <Seats1/>
        </Route>
        <Route exact path="/seats2" >
        <Seats2/>
        </Route>
        <Route exact path="/hero" >
        <Hero/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        </Switch>
        <Footer/>

      </div>
   
  );
}

export default App;
