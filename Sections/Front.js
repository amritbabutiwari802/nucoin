import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Video from "../components/Video";

const DynamicHeader = dynamic(() => import("../components/Video"), {
  suspense: true,
});

const Front = () => {
  return (
    <div>
      <div className="navbar-parent">
        <a className="name_logo">
          <span>NUC</span>

          <img src="https://nucoin.com.au/assets/images/nucoin-logo.png" />

          <span>IN</span>
        </a>

        <div className="main-navbar">
          <a className="nav-item-s">Home</a>
          <a className="nav-item-s">Roadmap</a>
          <a className="nav-item-s">Aboutus</a>
          <a className="nav-item-s">Services</a>
          <a className="nav-item-s">Team</a>
          <a className="nav-item-s">Contact</a>
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
      </div>
      <div className="nucoin_front-mc">
        <div className="front-main"   >
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
       
          <Video />
        </div>{" "}
      </div>
    </div>
  );
};

export default Front;
