import React from "react";
import "./style.css";
import {Link} from 'react-router-dom'

function Texthome() {
  return (
    <div>
      <div className="cont">
        <div className="text">
          <h1>ADVENTURE AWAITS</h1>
          <h3>What are you waiting for?</h3>
          <br></br>
          <div className="buttons">
            <br></br>
            <button className="btn1"><Link to='./SIgnup'>GET STARTED</Link></button>
            <button className="btn2">WATCH TRAILER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Texthome;
