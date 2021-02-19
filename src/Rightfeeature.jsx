import React from "react";
import "./style.css";

function Rightfeeature(props) {
  return (
    <div>
      <div className="itr">
        <div className="dri">
          <img className="rimage" src={props.img} height="100%" width="100%" />
        </div>
        <div className="rpara">
          <h1 className="rh1">{props.text}</h1>
          <p className="rpt">{props.ptext}</p>
          <button className="rbutton">{props.rbtn}</button>
        </div>
      </div>
    </div>
  );
}

export default Rightfeeature;
