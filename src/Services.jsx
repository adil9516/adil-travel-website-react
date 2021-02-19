import React from "react";
import Navbar from "./Navbar";
import Rightfeeature from "./Rightfeeature";
import skydiv from "./images/skydiving.jpg";
import rafting from "./images/rafting.jpg";
import Leftfeature from "./Leftfeature";
import scuba from "./images/scuba.jpg";
import trekking from "./images/trekking.jpg";
import Footer from './Footer'

function Services() {
  return (
    <div>
    <div className="bodyser">
      <Navbar />
      <Rightfeeature
        rbtn="Sky-Diving"
        img={skydiv}
        text="LET'S PIERCE THE SKY"
        ptext="Feaarless jump against strong gravity pull"
      />

      <Leftfeature
        lbtn="Scuba-Diving"
        text="SUBMERGE INTO THE BEAUTIFUL WORLD !!"
        ptext="Discovering new species underwater"
        img={scuba}
      />
      <Rightfeeature
        rbtn="Rafting"
        img={rafting}
        text="BECOME ONE WITH THE FLOW"
        ptext="Gushing water, Raging winds and thrilling experience"
      />
      <Leftfeature
        lbtn="Trekking"
        text="CLIMB YOUR FEARS"
        ptext="Watch the peak moment of your life"
        img={trekking}
      />
      <Footer />
    </div>
    
    </div>
  );
}

export default Services;
