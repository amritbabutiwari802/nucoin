import React from "react";

const Benifits = () => {
  return (
    <div>
      <div>
        <div className="nucoin_services-title">What You Get</div>
        <h1 className="nucoin_services-heading">
          Benefits of using Our Solution
        </h1>
        <div className="nucoin_services_divider">
          <span className="nucoin_benifits_divider-2" data-aos="fade-right"
      data-aos-duration="2500">
            <img
              src="https://nucoin.com.au/assets/images/Block4.png"
              className="nucoin_benifits_divider-2-image"
            />
          </span>

          <span className="nucoin_services_divider-1" data-aos="fade-left"
      data-aos-duration="2500">
            <p className="nucoin_service_up">{data.up}</p>
            <div className="nucoin_benifits-listContainer">
              {data.list.map((value, index) => (
                <div key={"value" + index} style={{ display: "flex" }}>
                  <div style={{ width: "40px", height: "40px" }}></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16px"
                    viewBox="0 0 24 24"
                    width="16px"
                    fill="#1FF8F2"
                    class="navigation-icon"
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
        </div>
      </div>
    </div>
  );
};

export default Benifits;

const data = {
  up: "The NuGenesis ecosystem is the most conducive interface to welcome mainstream capital flow. We cater for mainstream expectations by providing:",
  list: [
    "New frontiers for the creation of crypto assets including beyond tokens and in virtual reality.",
    "A true interoperable experience agnostic as between blockchain assets and dApps.",
    "A decentralised, and safer, fiat-crypto-crypto-fiat exchange through which to invest.",
    "Through serialised Digital assets, hack-proof confidence in building assets for personal and commercial use including multi-sig wallets and such conditions for mortgaging new and existing asset acquisitions in a modern real defi capital market (lost of stolen mnemonics, wallets and crypto assets can, subject to verification, be burned and true ownership restored).",
    "Off-line satellite payment systems and local remittance offices.",
  ],
  down: "",
};
