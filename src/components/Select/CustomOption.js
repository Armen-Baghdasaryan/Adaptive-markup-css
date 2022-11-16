import React from "react";
import chevronR from "./assets/chevronR.svg";

const CustomOption = ({ text }) => {
  return (
    <div className="rowContainer">
      <span className="rowText">{text}</span>
      {<img alt="img" src={chevronR} />}
    </div>
  );
};

export default CustomOption;
