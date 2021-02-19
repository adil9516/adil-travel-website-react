import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import './signup.css'

function SIgnup() {
  return (
    <div className='body'>
    <Navbar />
      <div className="wrap">
        <h1>Sign-up </h1>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type='text' placeholder='Email'></input>
        <input type='tex' placeholder='Mobile number'></input>
        <input type='text' placeholder='Enter your destination here'></input>
        <br></br>
        <div className='buttons'>
        <button>Sign-Up</button>
        <button>Log-In</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SIgnup;
