import React from "react";

const TouristInfoCards = props => (
  <div className="card text-center">
    <img src={props.imgUrl} className="card-img-top h-50" />
    <h2 className="card-title">{props.name}</h2>
    <div className="card-body">
      <a href={props.url} className="btn btn-primary">
        Learn more
      </a>
    </div>
  </div>
);

export default TouristInfoCards;
