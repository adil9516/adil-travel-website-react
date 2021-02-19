import React from "react";

function Footer(props) {
  return (
    <div className='f'>
      <div className="fbody">
        <ul>
          <li>
            {" "}
            <i class="fab fa-facebook fa-3x"></i>
          </li>
          <li>
            <i class="fab fa-instagram fa-3x"></i>
          </li>
          <li>
            {" "}
            <i class="fab fa-twitter-square fa-3x"></i>
          </li>
        </ul>
      </div>
      <div className="ftext">
        <p>Copyright @ Adil Akram. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
