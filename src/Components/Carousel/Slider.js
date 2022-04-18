import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.unsplash.com/photo-1527073620320-77635188c627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore the wild place</h3>
            <p>Travel and Capter wild animales With me</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.unsplash.com/photo-1620693778087-2bced33a4a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Travel the world </h3>
            <p>
              Expreienced then 30 times wild place and Award winning
              Photographar
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.unsplash.com/photo-1518443855757-dfadac7101ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Capture Animal and learn about wild</h3>
            <p>
              Enjoy The Great place and learn about diffrent culture and place
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
