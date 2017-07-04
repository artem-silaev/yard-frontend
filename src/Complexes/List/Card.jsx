import React from "react";

export default props => (
  <a className="card" href={props.url}>
    <img className="card-image" src={props.image} alt=""/>
    <article className="card-content">
      <p className="card-location">{props.location}</p>
      <h3 className="card-address">{props.address}</h3>
      <p className="card-description">
        {props.description}
      </p>
    </article >
  </a>
);
