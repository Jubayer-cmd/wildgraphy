import React from "react";
import Slider from "../Carousel/Slider";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="container-fluid">
      <Slider></Slider>
      <Services></Services>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
