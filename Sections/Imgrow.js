import React from "react";

const Imgrow = (props) => {
  return (
    <div className="nucoin_imgrow-container">
      {props.items.map((value, index) => (
        <div key={value.src + index} className="nucoin_imgrow-item-container">
          <img src={value.src} className="nucoin_imgrow-image" />
          <p className="nucoin_imgrow-text">{value.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Imgrow;
