import React from "react";
import "./Features.css";
import FeaturesArray from "./FeaturesArray";

const Features = () => {
  return (
    <div className="features__container">
      {FeaturesArray.map((feature, i) => (
        <div key={i} className="features__item">
          <img src={feature.icon} alt="features-icon" />
          <h1>{feature.h1}</h1>
          <p>
            {feature.p1} <br /> {feature.p2} <br /> {feature.p3}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
