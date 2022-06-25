import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="nucoin-hr" />
      <ASection />
      <div className="nucoin-hr" />
      <Kwer data={data} />
      <div className="nucoin-hr" />
      <p className="nucoin_footer-jsdfk">
        © 2022 Nucoin, All Rights Reserved - Powered by NuGenesis v1.1.0
      </p>
    </div>
  );
};

export default Footer;

const ASection = (props) => {
  return (
    <div className="nucoin_footer-asection-container">
      <div className="nucoin_footer-asection">
        <a className="name_logo">
          <span>NUC</span>

          <img src="https://nucoin.com.au/assets/images/nucoin-logo.png" />

          <span>IN</span>
        </a>
        <div className="nucoin_footer-ax1">Registry code: 14918196</div>
        <div className="nucoin_footer-ax2">
          License FRK001344 Virtual Currency Wallet Service
        </div>
        <div className="nucoin_footer-ax2">
          License FVR001466 Virtual Currency Against Fiat Currency
        </div>
      </div>
      <div className="nucoin_footer-asection">
        <div className="nucoin_footer-ax33"> Newsletter </div>
        <div className="nucoin_footer-ax3">
          Keep up to date with our progress. Subscribe for e-mail updates.
        </div>
        <div className="nucoin_footer-ax4">
          <input
            type="text"
            className="nucoin_footer-ax5"
            placeholder="Email"
          />{" "}
          <span>Subscribe</span>
        </div>
      </div>
      <div className="nucoin_footer-asection">
        <div className="nucoin_footer-ax33">Social</div>
        <div className="nucoin_footer-ax7">
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              class="svg-inline--fa fa-facebook-f fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width="20"
              height="20"
            >
              <path
                fill="inherit"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              class="svg-inline--fa fa-twitter fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <path
                fill="inherit"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="youtube"
              class="svg-inline--fa fa-youtube fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="20"
              height="20"
            >
              <path
                fill="inherit"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              ></path>
            </svg>
          </span>
          <span>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="20px"
              height="20px"
            >
              {" "}
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
          </span>
        </div>
        <div className="nucoin_footer-ax6">Install App to Go</div>
        <figure class="nucoin_footer-store-box">
          <span
            href="https://apps.apple.com/us/app/nucoin/id1617291895"
            target="_blank"
            className="nucoin_footer-appstore"
          >
            <span>
              {" "}
              <svg
                className="nucoin_footer-appstore-img"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
              </svg>
            </span>
            <span>
              <p>Download on the</p>
            </span>
          </span>
          <span
            href="https://play.google.com/store/apps/details?id=com.nugenesis.nucoinapp"
            target="_blank"
            className="nucoin_footer-appstore"
          >
            <svg
              className="nucoin_footer-appstore-img"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
            </svg>
            <p>Get it on</p>
          </span>
        </figure>
      </div>
    </div>
  );
};

const Idkev = (props) => {
  return (
    <div className="nucoin_footer_skdfkweiu">
      <div className="nucoin_footer_skdfkjsd">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#1FF8F2"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path>
          </svg>
        </span>
        <p>{props.address}</p>
      </div>
      {props.phone.map((value, index) => (
        <div key={value + index} className="nucoin_footer_skdfkjsd">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#1FF8F2"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path>
            </svg>
          </span>
          <p>{value}</p>
        </div>
      ))}

      {props.email.map((value, index) => (
        <div key={value + index} className="nucoin_footer_skdfkjsd">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#1FF8F2"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
            </svg>
          </span>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

const Kwer = (props) => {
  return (
    <div className="nucoin_footer-link-container">
      {props.data.map((value, index) => (
        <div key={index} className="nucin_footer-skjdfakjsf">
          <Idkev
            address={value.address}
            email={value.email}
            phone={value.phone}
          />
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    address: "632 Forest Road Bexley , Sydney, NSW, Australia 2216",
    phone: ["1300 nucoin", "+61 418 688 812"],
    email: ["admin@nucoin.com.au"],
  },
  {
    address:
      "9/A-1 Pratapgunj Opp. C. S. Patel Enclaves Vadodara, Gujarat – 390002, India",
    phone: ["(+91) 999 8526878"],
    email: ["admin@nucoin.com.au"],
  },
  {
    address:
      "3rd Floor, Raidurgam Junction Hyderabad, Telangana – 500032, India",
    phone: ["(+91) 994 9670204"],
    email: ["admin@nucoin.com.au"],
  },
  {
    address:
      "Unit No. 2H-05-256, Floor No. 5, Bldg No. 2, Plot No. 550-554, J&G, DMCC, Dubai, UAE",
    phone: ["(TBD"],
    email: ["admin@nucoin.com.au"],
  },
  {
    address: "632 Forest Road Bexley , Sydney, NSW, Australia 2216",
    phone: ["1300 nucoin", "+61 418 688 812"],
    email: ["admin@nucoin.com.au"],
  },
  {
    address:
      "9/A-1 Pratapgunj Opp. C. S. Patel Enclaves Vadodara, Gujarat – 390002, India",
    phone: ["(+91) 999 8526878"],
    email: ["admin@nucoin.com.au"],
  },
  {
    address:
      "3rd Floor, Raidurgam Junction Hyderabad, Telangana – 500032, India",
    phone: ["(+91) 994 9670204"],
    email: ["admin@nucoin.com.au"],
  },
  {
    address:
      "Unit No. 2H-05-256, Floor No. 5, Bldg No. 2, Plot No. 550-554, J&G, DMCC, Dubai, UAE",
    phone: ["(TBD"],
    email: ["admin@nucoin.com.au"],
  },
];
