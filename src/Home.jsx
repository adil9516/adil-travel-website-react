import React from "react";
import "./style.css";
import bgvideo from "./videos/mountain.mp4";
import Navbar from "./Navbar";
import Texthome from "./Texthome";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Texthome />
      <div className="bg-screen">
        <video autoPlay loop muted id="myvideo">
          <source src={bgvideo} type="video/mp4"></source>
        </video>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
