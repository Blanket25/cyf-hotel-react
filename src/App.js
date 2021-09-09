import React from "react";
import Heading from "./components/Heading.js";
import TouristInfoCards from "./components/TouristInfoCards.js";
import Bookings from "./components/Bookings";
import Footer from "./components/Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="d-flex flex-row justify-content-center">
        <TouristInfoCards
          imgUrl="https://peoplemakeglasgow.com/images/IntroducingGlasgow/Green_city_from_Necropolis.jpg"
          url="https://peoplemakeglasgow.com/"
          name="Glasgow"
        />
        <TouristInfoCards
          imgUrl="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Folympic-parade_1992645352.jpg&action=ProductListMain"
          url="visitmanchester.com"
          name="Manchester"
        />
        <TouristInfoCards
          imgUrl="https://cdn.londonandpartners.com/assets/attractions/culture/46836-310x174.jpg"
          url="https://visitlondon.com/"
          name="London"
        />
      </div>
      <Bookings />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
