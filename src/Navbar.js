import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css'


function Navbar() {
        return (
          <nav class="navbar navbar-expand-lg navbar-dark
           bg-dark">
          <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" to=""></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Todos">Todos</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Contacts">Contacts</Link>
  </li>
</ul>
</nav>

        );
    
}

export default Navbar;