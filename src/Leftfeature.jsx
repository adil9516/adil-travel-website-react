import React from "react";

function Leftfeature(props) {
  return (
    <div>
      <div className="itl">
        <div className="dli">
          <img className="limage" src={props.img} height="100%" width="100%" />
        </div>
        <div className="lpara">
          <h1 className="lh1">{props.text}</h1>
          <p className="lpt">{props.ptext}</p>
          <button className="lbutton">{props.lbtn}</button>
        </div>
      </div>
    </div>
  );
}

export default Leftfeature;
