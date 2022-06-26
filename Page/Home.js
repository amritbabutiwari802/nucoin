import React from "react";
import About from "../Sections/About";
import Front from "../Sections/Front";
import Imgrow from "../Sections/Imgrow";
import Nugenis from "../Sections/Nugenis";
import Second from "../Sections/Second";
import Services from "../Sections/Services";
import Benifits from "../Sections/Benifits";
import Teams from "../Sections/Teams";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";

const Home = () => {
  return (
    <div className=" home_container-main">
      <div className=" home-innercontainer-gh45t " > 
      <Front />
      <Second />
      <About />
      <Nugenis />
      <Services />
      <Imgrow
        items={[
          {
            src: "https://nucoin.com.au/assets/images/Block1.png",
            text: "Unlimited Scalability",
          },
          {
            src: "https://nucoin.com.au/assets/images/Block2.png",
            text: "Exchanges",
          },
          {
            src: "https://nucoin.com.au/assets/images/Block3.png",
            text: "Artificial Intelligence",
          },
        ]}
        fade1="1"
      />

      <Benifits />
      <Imgrow
        items={[
          {
            src: "https://nucoin.com.au/assets/images/Block5.png",
            text: "Safe and Secure",
          },
          {
            src: "https://nucoin.com.au/assets/images/Block6.png",
            text: "Instant Exchange",
          },
          {
            src: "https://nucoin.com.au/assets/images/Block7.png",
            text: "World Coverage",
          },
        ]}
        fade1="2"
      />

      <Teams
        items={[
          {
            src: "https://nucoin.com.au/assets/images/member-1.jpeg",
            text1: "Loren IPsum",
            text2: "Chief Executive Officer",
          },
          {
            src: "https://nucoin.com.au/assets/images/member-1.jpeg",
            text1: "Loren IPsum",
            text2: "Chief Executive Officer",
          },
          {
            src: "https://nucoin.com.au/assets/images/member-1.jpeg",
            text1: "Loren IPsum",
            text2: "Chief Executive Officer",
          },
          {
            src: "https://nucoin.com.au/assets/images/member-1.jpeg",
            text1: "Loren IPsum",
            text2: "Chief Executive Officer",
          },
        ]}
      />

      <Contact />
      <Footer />
      </div>
    </div>
  );
};

export default Home;
