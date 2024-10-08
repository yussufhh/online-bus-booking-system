import React from 'react'; // Ensure React is imported
import { NavLink } from "react-router-dom";
import logo from './images/logo.png';
import './Navbar.css';

const Navbar = () => {

  return (
    
    <nav>
      
      <img src={logo} className="nav--icon" alt="logo icon" />
      
      <h3 className="nav--logo_text">Journey Planner Express</h3> 
      <div className="nav-items">
      <NavLink exact to="/users" className="nav--links" activeClassName="active">
          Users
        </NavLink>
        <NavLink exact to="/login" className="nav--links" activeClassName="active">
          Login
        </NavLink>
      
        <NavLink exact to="/" className="nav--links" activeClassName="active">
          <span className="span-1">Book a Bus</span>
        </NavLink>
        <NavLink to="/stations" className="nav--links" activeClassName="active">
        Stations
        </NavLink>
       
        <NavLink to="/about" className="nav--links" activeClassName="active">
          About us
        </NavLink>
        <NavLink to="/payment" className="nav--links" activeClassName="active">
          Payment
        </NavLink>
        <NavLink to="/contact" className="nav--links" activeClassName="active">
          Contact
       </NavLink>
      
      </div>
    </nav>
  );
}

export default Navbar;
