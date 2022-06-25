import React from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `margin-top ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { marginTop: "100px" },
  entered: { marginTop: "0px" },
  exiting: {},
  exited: {},
};

const Second = () => {
  const [clicked, setClicked] = React.useState(1);

  return (
    <div className="nucoin_second-container">
      <span className="nucoin_second-progress">PROGESS</span>
      <span className="nucoin_second-roadmap">Nucoin Roadmap</span>
      <div className="nucoin_second-status">
        {" "}
        <a className={clicked == 1 ? "hp-fp-102" : "nucoin_hp-fb-notselected"}>
          My Wallet
        </a>{" "}
        <a className={clicked == 2 ? "hp-fp-102" : "nucoin_hp-fb-notselected"}>
          My Wallet
        </a>{" "}
        <a className={clicked == 3 ? "hp-fp-102" : "nucoin_hp-fb-notselected"}>
          My Wallet
        </a>
      </div>

      <img
        src="https://nucoin.com.au/assets/images/timelinered.png"
        className="nucoin_second-timeline-img"
      />

      <div className="nucoin_second_events_container">
        <FlyingCard mt="-100px" />
        <FlyingCard mt="-55px" />
        <FlyingCard mt="-100px" />
        <FlyingCard mt="-85px" />
        <FlyingCard mt="-25px" />{" "}
      </div>

      <Transition timeout="1" in={true}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <a className="hp-fp-102 ">RoadMap Board</a>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Second;

const FlyingCard = (props) => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "justify",
        gap: "20px",
        marginTop: props.mt,
      }}
    >
      <svg
        class="MuiSvgIcon-root"
        style={{ fill: "#3AF8F3", height: "25px", width: "25px" }}
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>

      <div>23-45-6746</div>

      <div style={{ width: "160px" }}>
        sdfa sdkjf sjkd lksjd lkjd jdklfjs dkdkllj kldjfks fjkldsjklsd{" "}
      </div>
    </span>
  );
};
