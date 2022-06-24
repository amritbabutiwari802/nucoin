import React from "react";

const Contact = () => {
  return (
    <div className="nucoin_contact_container">
      <h1 className="nucoin_contact_heading">Contact Us</h1>
      <div className="nucoin_contact_name_email">
        <input type="text" placeholder="Name" className="nucoin_contact_name" />

        <input
          type="text"
          placeholder="Email"
          className="nucoin_contact_email"
        />
      </div>

      <input
        type="text"
        placeholder="Address"
        className="nucoin_contact_address"
      />
      <textarea placeholder="Message" className="nucoin_contact_message" />
      <a className={"hp-fp-102 nucoin_teams-button"}>Send</a>
    </div>
  );
};

export default Contact;
