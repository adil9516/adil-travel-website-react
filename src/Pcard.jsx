import React from "react";

function Pcard(props) {
  return (
    <div>
      <div className="card">
        <div className="img-cont">
          {" "}
          <img src={props.img} alt="image" height="100%" width="100%"></img>
        </div>

        <div className="ctext">
          <h>{props.name}</h>
          <button className="pbtn"> {props.price}</button>
        </div>
      </div>
    </div>
  );
}

export default Pcard;
