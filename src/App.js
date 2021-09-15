import React from "react";
import Heading from "./components/Heading.js";
import TouristInfoCards from "./components/TouristInfoCards.js";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        infoArray={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
