import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Video from "../ComponentsX/VIdeo.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { slide as Menu } from "react-burger-menu";

const DynamicHeader = dynamic(() => import("../ComponentsX/VIdeo.js"), {
  suspense: true,
});

const Front = (props) => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [mobilemenu, setmenu] = React.useState(true);
  const [ismobile, setmobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window != "undefined" && window.innerWidth < 1250) {
      setmobile(true);
    }
  }, []);

  return (
    <div>
      <div className="navbar-parent" ref={props.refx}>
        <a className="name_logo">
          <span>NUC</span>

          <img src="https://nucoin.com.au/assets/images/nucoin-logo.png" />

          <span>IN</span>
        </a>

        <div className="main-navbar">
          <a
            className="nav-item-s"
            onClick={() => {
              props.handleSection(1);
            }}
          >
            Home
          </a>
          <a
            className="nav-item-s"
            onClick={() => {
              props.handleSection(2);
            }}
          >
            Roadmap
          </a>
          <a
            className="nav-item-s"
            onClick={() => {
              props.handleSection(3);
            }}
          >
            Aboutus
          </a>
          <a
            className="nav-item-s"
            onClick={() => {
              props.handleSection(4);
            }}
          >
            Services
          </a>
          <a
            className="nav-item-s"
            onClick={() => {
              props.handleSection(5);
            }}
          >
            Team
          </a>
          <a
            className="nav-item-s"
            onClick={() => {
              props.handleSection(6);
            }}
          >
            Contact
          </a>
          <a className="nav-item-s">Explorer</a>
          <a className="nav-item-s">Login</a>
          <a className="nav-item-s">SignUp</a>
          <div className="nav-image1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 24 24"
              width="20px"
              fill="#1BD3ED"
              className="transform-rotate"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path>
            </svg>
          </div>
        </div>

        {ismobile && (
          <div
            className={
              mobilemenu
                ? "nucoin_front-mobile-menucontainer-closed"
                : "nucoin_front-mobile-menucontainer "
            }
          >
            <div
              className={`nucoin_front-mobile-menu ${
                mobilemenu
                  ? "nucoin_front-mobile-menu-closed"
                  : "nucoin_front-mobile-menu-open"
              }`}
              onClick={() => {
                setmenu(!mobilemenu);
              }}
              style={{
                position: mobilemenu ? "relative" : "fixed",

                zIndex: "4",
              }}
            >
              <div
                className={`transition-anim1 ${
                  mobilemenu
                    ? "nucoin_front-mobile-line-123sd1"
                    : "rotate-anti45"
                }`}
              />
              <div
                className={`transition-anim ${
                  mobilemenu
                    ? "nucoin_front-mobile-line-123sd2"
                    : "display-gone"
                }`}
              />
              <div
                className={`transition-anim1 ${
                  mobilemenu ? "nucoin_front-mobile-line-123sd3" : "rotate-45"
                }`}
              />
            </div>

            {!mobilemenu && (
              <div className="mobile-navbar">
                <a href="#id1" className=" mobile-menu ">
                  Home
                </a>
                <a className="mobile-menu">Roadmap</a>
                <a className="mobile-menu">Aboutus</a>
                <a className="mobile-menu">Services</a>
                <a className="mobile-menu">Team</a>
                <a className="mobile-menu">Contact</a>
                <a className="mobile-menu">Explorer</a>
                <a className="mobile-menu">Login</a>
                <a className="mobile-menu">SignUp</a>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="nucoin_front-mc">
        <div
          className="front-main"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h1 className="introduction-text ">
            Nucoin, the world's first decentralized blockchain inspired by{" "}
            <a className=" intro-text-artificial-intelligence">
              Artificial Intelligence
            </a>
          </h1>
          <h4 className="hp-fp-100">New Age Of Digital Currency</h4>
          <a className="hp-fp-101">create Wallet</a>
          <a className="hp-fp-102">My Wallet</a>
          <a className="hp-fp-103">Become a Miner</a>
          <h4 className="hp-fp-100">NuGenesis Platform Documentation</h4>{" "}
        </div>
        <div className="nucoin_front-mcde">
          {/* <Suspense fallback={`Loading...`}>
            <DynamicHeader />
          </Suspense> */}
          {/* <Video /> */}
        </div>{" "}
      </div>
    </div>
  );
};

export default Front;
