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
import { useRef } from "react";

const Home = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  function handleSection(item) {
    switch (item) {
      case 1:
        ref1.current.scrollIntoView();
        break;
      case 2:
        ref2.current.scrollIntoView();
        break;
      case 3:
        ref3.current.scrollIntoView();
        break;
      case 4:
        ref4.current.scrollIntoView();
        break;
      case 5:
        ref5.current.scrollIntoView();
        break;
      case 6:
        ref6.current.scrollIntoView();
        break;
      default:
        break;
    }
  }

  return (
    <div className=" home_container-main">
      <Front refx={ref1} handleSection={handleSection} />
      <Second refx={ref2} />
      <About refx={ref3} />
      <Nugenis />
      <Services refx={ref4} />
      <Imgrow
        r
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
        refx={ref5}
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

      <Contact refx={ref6} />
      <Footer />
    </div>
  );
};

export default Home;
