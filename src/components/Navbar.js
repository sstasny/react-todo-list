import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
        return (
            <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
  <a className="navbar-brand" to="#">Task Manager</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item">
        <a class="nav-link" href="#">Sign Up</a>
      </li>
      
     
    </ul>
    
  </div>
</nav>

            

    
        );
    
}

export default Navbar;