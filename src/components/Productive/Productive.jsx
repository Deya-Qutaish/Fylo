import React from "react";
import "./Productive.css";
import productiveImg from "../../images/illustration-stay-productive.png";
import icon from "../../images/icon-arrow.svg";

const Productive = () => {
  return (
    <div className="productive__container">
      <img src={productiveImg} alt="productive" />
      <div className="productive__container--text">
        <h1>
          Stay Productive, <br /> wherever you are
        </h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends family and colleagues
          for live collaboration. no email attachments required
        </p>
        <a>
          <p>
            See how Fylo works <img src={icon} alt="arrow" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Productive;
