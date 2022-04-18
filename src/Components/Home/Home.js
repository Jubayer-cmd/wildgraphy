import React from "react";
import Slider from "../Carousel/Slider";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="container">
        <Services></Services>
      </div>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
