import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="bar">
        <div className="navbar">
          <div className="logo">
            <h1>TRVL</h1>
          </div>
          <div className="nav-list">
            <ul className="nav-items">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li className="signup"><Link to='./SIgnup'>SIGN UP</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
