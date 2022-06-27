import React from "react";

const Imgrow = (props) => {
  return (
    <div className="nucoin_imgrow-container" ref={props.refx}>
      {props.items.map((value, index) => (
        <a
          key={value.src + index}
          className="nucoin_imgrow-item-container"
          data-aos={
            index == 0
              ? props.fade1 == "1"
                ? "fade-left"
                : "fade-right"
              : index == 1
              ? props.fade1 == "1"
                ? "fade-up"
                : "fade-down"
              : props.fade1 == "1"
              ? "fade-right"
              : "fade-left"
          }
          data-aos-duration="2500"
        >
          <img src={value.src} className="nucoin_imgrow-image" />
          <span className="nucoin_imgrow-text">{value.text}</span>
        </a>
      ))}
    </div>
  );
};

export default Imgrow;
