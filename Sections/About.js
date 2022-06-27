import React from "react";
import Video from "../ComponentsX/VIdeo";

const About = (props) => {
  return (
    <div
      style={{ display: "flex" }}
      className="nucoin_about-container"
      ref={props.refx}
    >
      <div
        style={{ flex: "1" }}
        data-aos="fade-right"
        data-aos-duration="1500"
        className="nucoin_about-video-box"
      >
        {" "}
        {/* <Video />{" "} */}
      </div>
      <div
        style={{ flex: "1" }}
        data-aos="fade-left"
        data-aos-duration="1500"
        className="nucoin_about-text"
      >
        <h4 className="nucoin_about_ab">Business Solution</h4>
        <h1 className="nucoin_about_about">About NuCoin</h1>
        <p className="nucoin_about_p">
          NuGenesis is a fully completed native blockchain originally built for
          Government and transnational corporate applications. In the context of
          building a blockchain for Central Bank Digital Currencies (CBDC’s),
          and an exchange clearing house for settlement, limitations to scaling
          and speed, latency and reliance on human miners and validators had to
          be eliminated. Security had to be enhanced, its integrity underscored
          by Artificial Intelligence (AI) and carbon neutral in its efficiency.
        </p>
        <a className="hp-fp-110 nucoin_about-button">Road more</a>
      </div>
    </div>
  );
};

export default About;
