import React, { Component } from "react";

import {FaTruckMoving,FaHotTub,FaUserShield,FaTree} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
       // icon: <FaCocktail />,
       icon: <FaUserShield/>,
       
       title: "Security",
        info:
          "MySociety, Safety and security lie at the heart of the prosperity of any nation. Citizens want to feel safe (protected from risk or injury) and secure (free from danger or threat)."
      },
      {
      icon: <FaTruckMoving />,
        title: "Parking",
        info:
          "MySociety, Two wheeler or car parking spaces have often been a matter of prime concern for several apartment complexes."
      },
      {
        icon: <FaTree />,
        title: "Garden",
        info:
          "MySociety, The most important step in building a community garden is to assemble a community of people."
      },
      {
        icon: <FaHotTub />,
        title: "Swimming Pool",
        info:
          "MySociety,  a society’s swimming pool is an entertaining and vibrant hangout for children as well as adults."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
