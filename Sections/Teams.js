import React from "react";

const Teams = (props) => {
  return (
    <div className="nucoin_teams-container">
      <div className="nucoin_services-title">OUR EXPERTS</div>
      <h1 className="nucoin_services-heading">Team Members</h1>

      <div className="nucoin_team-cardbox">
        {props.items.map((value, index) => (
          <a className="nucoin_team_cardcontainer" key={value.src+index}  data-aos={index<2?"fade-left":"fade-right"}
          data-aos-duration="2500">
            <div className="nucoin_team_card" key={value.src + index}>
              <img src={value.src} alt="" className="nucoin_team-image" />
              <div className="nucoin_team-text">{value.text1}</div>
              <div className="nucoin_team-text">{value.text2}</div>
            </div>
          </a>
        ))}
      </div>

      <a className={"hp-fp-102 nucoin_teams-button"}>Our Teams</a>
    </div>
  );
};

export default Teams;
