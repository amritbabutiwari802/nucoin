import React from "react";

const Services = (props) => {
  return (
    <div ref={props.refx}>
      <div className="nucoin_services-title">PROCESS</div>
      <h1 className="nucoin_services-heading">Nucoin Services</h1>
      <div className="nucoin_services_divider">
        <span
          className="nucoin_services_divider-1"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <p className="nucoin_service_up">{data.up}</p>
          <div className="nucoin_serives-listContainer">
            {data.list.map((value, index) => (
              <div key={"value" + index} style={{ display: "flex" }}>
                <div style={{ width: "40px", height: "40px" }}></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 0 24 24"
                  width="16px"
                  fill="#1FF8F2"
                  className="navigation-icon"
                  style={{ transform: "rotate(90deg)", marginRight: "25px" }}
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
                </svg>

                <span style={{ display: "block", flex: "1" }}>{value}</span>
              </div>
            ))}
          </div>
          <p className="nucoin_service_up">{data.down}</p>
        </span>
        <span
          className="nucoin_services_divider-2"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            src="https://nucoin.com.au/assets/images/Block.png"
            className="nucoin_services_divider-2-image"
          />
        </span>
      </div>
    </div>
  );
};

export default Services;

const data = {
  up:
    "Focus on the user experience and substance Rather that compete with ingenious new blockchain technologies," +
    " our technology is to be the platform interfacing with them all. Rather than risk “betting” on which technology" +
    " will prevail on an on-going basis, we intend to focus on what matters most, and where the value is:",
  list: [
    "The “user friendly” experience, including participating in a community all mutually benefiting from each-others’ success.",
    "Intrinsic value, globally recognised, providing confidence, security and stability.",
    "Through this experience NuGenesis was developed to address the needs of real world scalability.",
  ],
  down: "Countries cannot rely on human validators, inefficient or excessive resource use. They require zero carbon emission. These are the conditions to funnel mass adoption of the new economy.",
};
