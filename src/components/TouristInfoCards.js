import React from "react";

const TouristInfoCard = props => (
  <div className="card text-center mr-1">
    <img src={props.imgUrl} className="card-img-top h-50" />
    <h2 className="card-title mt-3">{props.name}</h2>
    <div className="card-body">
      <a href={props.url} className="btn btn-primary">
        Learn more
      </a>
    </div>
  </div>
);

const TouristInfoCards = () => (
  <div className="d-flex flex-row justify-content-center mt-3">
    <TouristInfoCard
      imgUrl="https://peoplemakeglasgow.com/images/IntroducingGlasgow/Green_city_from_Necropolis.jpg"
      url="https://peoplemakeglasgow.com/"
      name="Glasgow"
    />
    <TouristInfoCard
      imgUrl="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Folympic-parade_1992645352.jpg&action=ProductListMain"
      url="visitmanchester.com"
      name="Manchester"
    />
    <TouristInfoCard
      imgUrl="https://cdn.londonandpartners.com/assets/attractions/culture/46836-310x174.jpg"
      url="https://visitlondon.com/"
      name="London"
    />
  </div>
);

export default TouristInfoCards;
