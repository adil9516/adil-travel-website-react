import React from "react";
import Navbar from "./Navbar";
import Pcard from "./Pcard";
import "./style.css";
import Cycle from "./images/Cycle.png";
import Parachute from "./images/parachutes.png";
import Boat from "./images/boat.png";
import Suits from "./images/suit.png";
import Bag from "./images/bag.png";
import emergencykit from "./images/emer.png";
import helmet from "./images/helmet.png";
import skates from "./images/skates.png";
import Footer from "./Footer";
function Products() {
  return (
    <div>
      <div className="pbody">
        <Navbar />
        <div className="f3">
          <Pcard img={Cycle} price="5000/-" name="Mountain-Bike" />
          <Pcard img={Parachute} price="7000/-" name="Sky-chute" />
          <Pcard img={Boat} price="15000/-" name="Rafty-Boat" />
          <Pcard img={emergencykit} price="300/-" name="Emergency-Kit" />
        </div>
        <div className="l3">
          <Pcard img={Suits} price="10000/-" name="Water-suit" />
          <Pcard img={Bag} price="800/-" name="Companion-Bag" />
          <Pcard img={helmet} price="750/-" name="Head-protector" />
          <Pcard img={skates} price="1300/-" name="Walk on wheels" />
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Products;
